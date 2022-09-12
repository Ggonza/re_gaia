# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Cities(models.Model):
    id = models.UUIDField(primary_key=True)
    cityname = models.CharField(db_column='cityName', max_length=20, blank=True, null=True)  # Field name made lowercase.
    postalcode = models.CharField(db_column='postalCode', max_length=20, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'cities'


class Classroom(models.Model):
    id = models.UUIDField(primary_key=True)
    classroomnumber = models.CharField(db_column='classroomNumber', max_length=10, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'classroom'


class Institutes(models.Model):
    id = models.UUIDField(primary_key=True)
    nit = models.CharField(max_length=40)
    institutename = models.CharField(db_column='instituteName', max_length=40)  # Field name made lowercase.
    city = models.ForeignKey(Cities, models.DO_NOTHING, db_column='city')

    class Meta:
        managed = False
        db_table = 'institutes'


class Permissions(models.Model):
    id = models.UUIDField(primary_key=True)
    role = models.ForeignKey('Role', models.DO_NOTHING, db_column='role')
    permission = models.CharField(max_length=20)
    description = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'permissions'


class Residual(models.Model):
    id = models.UUIDField(primary_key=True)
    liquidkg = models.DecimalField(db_column='liquidKg', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    solidkg = models.DecimalField(db_column='solidKg', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    manager = models.UUIDField()
    created_at = models.DateTimeField(blank=True, null=True)
    period = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'residual'


class Role(models.Model):
    id = models.UUIDField(primary_key=True)
    roletype = models.CharField(db_column='roleType', max_length=20)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'role'


class Students(models.Model):
    id = models.UUIDField(primary_key=True)
    dni = models.CharField(max_length=20)
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    institute = models.UUIDField()
    clasroom = models.UUIDField()

    class Meta:
        managed = False
        db_table = 'students'


class Usclist(models.Model):
    id = models.UUIDField(primary_key=True)
    professor = models.UUIDField()
    totaluscstudents = models.IntegerField(db_column='totalUscStudents')  # Field name made lowercase.
    create_at = models.DateTimeField(blank=True, null=True)
    classroom = models.ForeignKey(Classroom, models.DO_NOTHING, db_column='classroom')
    observations = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'uscList'


class Uscproduction(models.Model):
    id = models.UUIDField(primary_key=True)
    manager = models.UUIDField(blank=True, null=True)
    productiondate = models.DateTimeField(db_column='productionDate', blank=True, null=True)  # Field name made lowercase.
    menuprepare = models.TextField(db_column='menuPrepare')  # Field name made lowercase. This field type is a guess.
    totalusc = models.IntegerField(db_column='totalUSC', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'uscProduction'
