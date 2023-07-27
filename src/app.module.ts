import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306, 
      username: 'root',
      password: 'root', 
      database: 'db_login',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ruta a las entidades de TypeORM en tu proyecto
      autoLoadEntities: true,
      synchronize: true, // Sincronizar automáticamente las entidades con la base de datos (en entornos de desarrollo)
    }),   
    DatabaseModule, UserModule,
  ],
  controllers: [AppController, ],
  providers: [AppService,],
})
export class AppModule {}
