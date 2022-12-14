# Generated by Django 4.1.1 on 2022-09-10 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cities',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('cityname', models.CharField(blank=True, db_column='cityName', max_length=20, null=True)),
                ('postalcode', models.CharField(blank=True, db_column='postalCode', max_length=20, null=True)),
            ],
            options={
                'db_table': 'cities',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Classroom',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('classroomnumber', models.CharField(blank=True, db_column='classroomNumber', max_length=10, null=True)),
            ],
            options={
                'db_table': 'classroom',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Institutes',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('nit', models.CharField(max_length=40)),
                ('institutename', models.CharField(db_column='instituteName', max_length=40)),
            ],
            options={
                'db_table': 'institutes',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Permissions',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('permission', models.CharField(max_length=20)),
                ('description', models.CharField(blank=True, max_length=500, null=True)),
            ],
            options={
                'db_table': 'permissions',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Residual',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('liquidkg', models.DecimalField(blank=True, db_column='liquidKg', decimal_places=65535, max_digits=65535, null=True)),
                ('solidkg', models.DecimalField(blank=True, db_column='solidKg', decimal_places=65535, max_digits=65535, null=True)),
                ('manager', models.UUIDField()),
                ('created_at', models.DateTimeField(blank=True, null=True)),
                ('period', models.CharField(blank=True, max_length=20, null=True)),
            ],
            options={
                'db_table': 'residual',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('roletype', models.CharField(db_column='roleType', max_length=20)),
            ],
            options={
                'db_table': 'role',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Students',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('dni', models.CharField(max_length=20)),
                ('first_name', models.CharField(blank=True, max_length=50, null=True)),
                ('last_name', models.CharField(blank=True, max_length=50, null=True)),
                ('institute', models.UUIDField()),
                ('clasroom', models.UUIDField()),
            ],
            options={
                'db_table': 'students',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Usclist',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('professor', models.UUIDField()),
                ('totaluscstudents', models.IntegerField(db_column='totalUscStudents')),
                ('create_at', models.DateTimeField(blank=True, null=True)),
                ('observations', models.CharField(blank=True, max_length=500, null=True)),
            ],
            options={
                'db_table': 'uscList',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Uscproduction',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('manager', models.UUIDField(blank=True, null=True)),
                ('productiondate', models.DateTimeField(blank=True, db_column='productionDate', null=True)),
                ('menuprepare', models.TextField(db_column='menuPrepare')),
                ('totalusc', models.IntegerField(blank=True, db_column='totalUSC', null=True)),
            ],
            options={
                'db_table': 'uscProduction',
                'managed': False,
            },
        ),
    ]
