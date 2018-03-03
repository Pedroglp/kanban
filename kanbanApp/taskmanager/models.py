from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Status(models.Model):
    name = models.CharField(max_length = 255, blank = False, null = False)
    description = models.CharField(max_length = 255, blank = True, null = False)

    class Meta:
        managed = True
        db_table = 'task_status'
    
    def __str__(self):
        return self.name

class Task(models.Model):
    name = models.CharField(max_length = 100, blank = False, null = False)
    description = models.CharField(max_length = 255, blank = False, null = False)
    dateAssigned = models.DateTimeField(blank = True, null = False)
    dateStart = models.DateTimeField(blank = True, null = True)
    dateEnd = models.DateTimeField(blank = True, null = True)
    status = models.ForeignKey(Status, models.DO_NOTHING)
    owner = models.ForeignKey(User, models.DO_NOTHING, blank = False, null = False, related_name='owner')
    userAssigned = models.ForeignKey(User, models.DO_NOTHING, blank = False, null = False, related_name='user_assigned')

    class Meta:
        managed = True
        db_table = 'task'

    def save(self, *args, **kwargs):
        if not self.pk: #creating model first time
            self.dateAssigned = timezone.now()
        super(Task, self).save(args, kwargs)

    def changeAssignedUser(self, user):
        self.userAssigned = user
        self.status = Status.objects.filter(pk=1)
        self.dateAssigned = timezone.now()
        self.dateStart, self.dateEnd = None, None

    def __str__(self):
        return self.name
