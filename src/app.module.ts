import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de base de datos que estás utilizando
      host: '127.0.0.1', // Dirección del servidor MySQL
      port: 3306, 
      username: 'root',
      password: 'root', 
      database: 'db_login',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ruta a las entidades de TypeORM en tu proyecto
      synchronize: false, // Sincronizar automáticamente las entidades con la base de datos (en entornos de desarrollo)
    }),   
    DatabaseModule,
  ],
  controllers: [AppController, LoginController, UserController],
  providers: [AppService, LoginService, UserService],
})
export class AppModule {}
