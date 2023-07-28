import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    getUsers(): Promise <User[]>{
        return this.userService.getUsers();
    }
    
    @Get(':id')
    getUser(@Param('id') id: number): Promise <User> {
        return this.userService.getUser(id);
    }

    @Post()
    logUser(@Body() userDto: UserDto) {        
        return this.userService.logUser(userDto);
    }


}
