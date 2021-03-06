# Generated by Django 2.0.2 on 2018-02-28 04:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(blank=True, max_length=255)),
            ],
            options={
                'db_table': 'task_status',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('dateAssigned', models.DateTimeField()),
                ('dateStart', models.DateTimeField(blank=True, null=True)),
                ('dateEnd', models.DateTimeField(blank=True, null=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='owner', to=settings.AUTH_USER_MODEL)),
                ('status', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='taskmanager.Status')),
                ('userAssigned', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='user_assigned', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'task',
                'managed': True,
            },
        ),
    ]
