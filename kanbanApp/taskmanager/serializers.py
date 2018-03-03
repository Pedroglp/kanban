from taskmanager.models import Status, Task, User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password','user_permissions','username',
        'is_superuser','date_joined','groups','is_staff',
        'is_active','last_login')

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = ('id','name', 'description')
    

class TaskSerializer(serializers.ModelSerializer):
    status = StatusSerializer() 
    owner = UserSerializer()
    userAssigned = UserSerializer()

    class Meta:
        model = Task
        depth=1
        fields = ('id','name', 'dateAssigned', 'dateStart',
                  'dateEnd', 'status', 'owner', 'userAssigned','description')

