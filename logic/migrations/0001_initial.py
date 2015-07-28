# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('uid', models.CharField(max_length=8)),
                ('name', models.CharField(max_length=8)),
                ('password', models.CharField(max_length=16)),
            ],
        ),
    ]
