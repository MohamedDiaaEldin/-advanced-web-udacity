#!/usr/bin/bash

sudo  docker run -d -e POSTGRES_PASSWORD=123 -e POSTGRES_USER=mohamed -e POSTGRES_DB=udacity -p 192.168.1.100:5432:5432 -v /home/mohamed/Desktop/udacity/advanced-web-udacity_v1/database:/var/lib/postgresql/data postgres
                                                                                                      