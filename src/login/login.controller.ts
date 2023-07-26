import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get()
    getLogin(@Query() filterQuery){
        const { searchTerm, orderBy } = filterQuery;
        return `All ${searchTerm} logins ordered by ${orderBy}`;
    }

    @Post()
    signIn(@Body('message') message: string){
        return message;
    }


}
