import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
