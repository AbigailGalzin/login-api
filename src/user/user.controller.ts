import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    getUsers(): User[]{
        return this.userService.getUsers();
    }
    @Get()
    getUser(@Param('username') username: string): User {
        return this.userService.getUser(username);
    }
    @Post()
    createUser(@Body('username') username: string, @Body('message') message: string ) {
        return this.userService.createUser(username, message);
    }
}
