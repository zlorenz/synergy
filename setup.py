# -*- coding: utf-8 -*-
#!/usr/bin/env python

import os
import sys


try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

import synergy
version = synergy.__version__

setup(
    name='synergy',
    version=version,
    author='',
    author_email='zlorenz@rabbit-hole-studios.com',
    packages=[
        'synergy',
    ],
    include_package_data=True,
    install_requires=[
        'Django>=1.6.1',
    ],
    zip_safe=False,
    scripts=['synergy/manage.py'],
)