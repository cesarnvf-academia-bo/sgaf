PGPASSWORD=123qwe dropdb -h localhost -p 5432 -U postgres sgafbd
PGPASSWORD=123qwe createdb -h localhost -p 5432 -U postgres sgafbd
PGPASSWORD=123qwe psql -h localhost -p 5432 -U postgres -d sgafbd -f tablas.sql
#PGPASSWORD=123qwe psql -h localhost -p 5432 -U postgres -d sgafbd -f datos.sql
