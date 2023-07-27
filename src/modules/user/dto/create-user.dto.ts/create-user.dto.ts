import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    readonly username: string;

    @IsString() //Esa propiedad tiene que existir obligatoriamente y ser string
    readonly password: string;    
}
