from rest_framework import views, status, viewsets
from rest_framework.response import Response
from taskmanager.serializers import StatusSerializer, TaskSerializer, UserSerializer
from rest_framework.decorators import detail_route
from taskmanager.models import Task, Status, User
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.shortcuts import get_object_or_404
from django.utils import timezone
from itertools import chain

class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

    def create(self, request):
        #status = get_object_or_404(Status.objects.all(), pk = request.data['statusId'])
        #de inicio sera considerado que todas as tarefas comecam como Todo.
        taskStatus = Status.objects.get(pk=1)
        owner = request.user
        userAssigned = get_object_or_404(User.objects.all(), pk = request.data['assignedUser'])
        taskName = request.data['name']
        taskDesc = request.data['description']
        newTask = Task(owner = request.user, userAssigned = userAssigned, 
                        description = taskDesc, name = taskName, status = taskStatus )
        newTask.save()
        return Response({'result':TaskSerializer(newTask).data}, status = status.HTTP_200_OK)

    def retrieve(self, request, pk):
        task = get_object_or_404(self.queryset, pk = pk, owner = request.user)
        if request.user.id in {task.owner.id, task.userAssigned.id}:
            serializedTask = TaskSerializer(task)
            return Response({'result':serializedTask.data}, status = status.HTTP_200_OK)
        else:
            return Response({'result':''}, status = status.HTTP_401_UNAUTHORIZED)

    def destroy(self, request, pk):
        task = self.get_object()
        if task.owner == request.user:
            serializedTask = TaskSerializer(task)
            task.delete()
            return Response({'result':serializedTask.data}, status = status.HTTP_200_OK)
        else:
            return Response({'result':''}, status = status.HTTP_401_UNAUTHORIZED)

    def partial_update(self, request, pk):
        task = self.get_object()
        newTaskStatus = get_object_or_404(Status, pk = request.data['statusId'])
        print(task.owner)
        print(task.userAssigned)
        print(request.user)
        if request.user.id in [task.owner.id, task.userAssigned.id]:
            if(newTaskStatus.id == 2):
                task.dateStart = timezone.now()
            else:
                task.dateEnd = timezone.now()
            task.status = newTaskStatus
            task.save()
            serializedTask = TaskSerializer(task)
            return Response({'result': serializedTask.data}, status = status.HTTP_200_OK)
        else:
            return Response({'result':''}, status = status.HTTP_401_UNAUTHORIZED)

    def list(self, request):
        queryset = Task.objects.filter(userAssigned=request.user)
        '''if user is not None:
            queryset = list(chain(queryset.filter(userAssigned = user),queryset.filter(owner = user)))'''

        return Response({'result':TaskSerializer(queryset, many= True).data})

#TODO: Decorator checking user owner and userAssigned.


class StatusViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)
    queryset = Status.objects.all()
    serializer_class = StatusSerializer

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)
    queryset = User.objects.all()
    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)