import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type: 'mysql', // Tipo de base de datos que estás utilizando
            host: 'localhost', // Dirección del servidor MySQL
            port: 3306, // Puerto de MySQL (puede variar, asegúrate de usar el correcto)
            username: 'root', // Usuario de MySQL
            password: 'root', // Contraseña de MySQL
            database: 'db_login', // Nombre de la base de datos que deseas usar
            entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ruta a las entidades de TypeORM en tu proyecto
            synchronize: false, // Sincronizar automáticamente las entidades con la base de datos (en entornos de desarrollo)
        })
    ]
})
export class DatabaseModule {}
