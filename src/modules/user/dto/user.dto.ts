import { IsNumber, IsString } from "class-validator";

export class UserDto {
    
    readonly id: number;

    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;    
}
