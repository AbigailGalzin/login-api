import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto.ts/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get('all')
    getUsers(): Promise <User[]>{
        return this.userService.getUsers();
    }
    
    @Get(':id')
    getUser(@Param('id') id: number): Promise <User> {
        return this.userService.getUser(id);
    }

    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }
}
