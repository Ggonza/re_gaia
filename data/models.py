from django.db import models


class Cities(models.Model):
    id = models.UUIDField(primary_key=True)
    cityname = models.CharField(db_column='cityName', max_length=20, blank=True, null=True)  # Field name made lowercase.
    postalcode = models.CharField(db_column='postalCode', max_length=20, blank=True, null=True)  # Field name made lowercase.


class Classroom(models.Model):
    id = models.UUIDField(primary_key=True)
    classroomnumber = models.CharField(db_column='classroomNumber', max_length=10, blank=True, null=True)  # Field name made lowercase.


class Institutes(models.Model):
    id = models.UUIDField(primary_key=True)
    nit = models.CharField(max_length=40)
    institutename = models.CharField(db_column='instituteName', max_length=40)  # Field name made lowercase.
    city = models.ForeignKey(Cities, on_delete=models.CASCADE, db_column='city')



class Permissions(models.Model):
    id = models.UUIDField(primary_key=True)
    role = models.ForeignKey('Role', on_delete=models.CASCADE, db_column='role')
    permission = models.CharField(max_length=20)
    description = models.CharField(max_length=500, blank=True, null=True)



class Residual(models.Model):
    id = models.UUIDField(primary_key=True)
    liquidkg = models.DecimalField(db_column='liquidKg', max_digits=5, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    solidkg = models.DecimalField(db_column='solidKg', max_digits=5, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    manager = models.UUIDField()
    created_at = models.DateTimeField(blank=True, null=True)
    period = models.CharField(max_length=20, blank=True, null=True)


class Role(models.Model):
    id = models.UUIDField(primary_key=True)
    roletype = models.CharField(db_column='roleType', max_length=20)  # Field name made lowercase.



class Students(models.Model):
    id = models.UUIDField(primary_key=True)
    dni = models.CharField(max_length=20)
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    institute = models.UUIDField()
    clasroom = models.UUIDField()


class Usclist(models.Model):
    id = models.UUIDField(primary_key=True)
    professor = models.UUIDField()
    totaluscstudents = models.IntegerField(db_column='totalUscStudents')  # Field name made lowercase.
    create_at = models.DateTimeField(blank=True, null=True)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE, db_column='classroom')
    observations = models.CharField(max_length=500, blank=True, null=True)


class Uscproduction(models.Model):
    id = models.UUIDField(primary_key=True)
    manager = models.UUIDField(blank=True, null=True)
    productiondate = models.DateTimeField(db_column='productionDate', blank=True, null=True)  # Field name made lowercase.
    menuprepare = models.TextField(db_column='menuPrepare')  # Field name made lowercase. This field type is a guess.
    totalusc = models.IntegerField(db_column='totalUSC', blank=True, null=True)  # Field name made lowercase.

