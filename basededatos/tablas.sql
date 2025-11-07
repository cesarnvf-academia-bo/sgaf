drop schema if exists public cascade;
create schema public;
create extension if not exists pgcrypto;

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR DEFAULT '',
    clave  VARCHAR DEFAULT '',
	rol VARCHAR DEFAULT ''
);



--activofijo datos del activo (código, nombre, valor, vida útil, fecha adquisición)
--grupo clasificación (muebles, equipos, vehículos, etc.)
--auxiliar subcategorías dentro del grupo
--oficina ubicación física
--responsable — personas asignadas al activo
--estado nuevo, en uso, dado de baja, en reparación
--baja registro de activos dados de baja con motivo y fecha
