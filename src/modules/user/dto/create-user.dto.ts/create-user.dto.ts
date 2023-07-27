import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    
    readonly id: number;

    @IsString()
    readonly username: string;

    @IsString() //Esa propiedad tiene que existir obligatoriamente y ser string
    readonly password: string;    
}
