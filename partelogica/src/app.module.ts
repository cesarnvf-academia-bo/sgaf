import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutentificacionModule } from './autentificacion/autentificacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123qwe",
      database: "sgafbd",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuarioModule,
    AutentificacionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
