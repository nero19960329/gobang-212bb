# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('logic', '0004_room'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='user_id_1',
            field=models.CharField(max_length=8, default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='room',
            name='user_id_2',
            field=models.CharField(max_length=8, default=''),
            preserve_default=False,
        ),
    ]
