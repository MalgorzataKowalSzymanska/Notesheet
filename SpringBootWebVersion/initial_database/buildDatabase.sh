#!/bin/bash
docker create --name postgres-demo -e POSTGRES_PASSWORD=123 -p 5432:5432 postgres:11.5-apline
docker start postgres-demo
$ winpty docker exec -it postgres-demo  psql -U postgres
postgres=# create database note_sheet;

docker cp create_tables.sql postgres-demo:/create_tables.sql
docker exec -it postgres-demo psql -d conference_app -f create_tables.sql -U postgres
docker cp insert_data.sql postgres-demo:/insert_data.sql
docker exec -it postgres-demo psql -d conference_app -f insert_data.sql -U postgres
