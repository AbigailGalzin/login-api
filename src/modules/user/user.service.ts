import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto.ts/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor (@InjectRepository(User) private readonly userRepository: Repository <User> ){}

    async getUsers(): Promise <User[]>{
        return await this.userRepository.find();
    }

    async getUser(id: number): Promise <User> {
        const user = await this.userRepository.findOne( { where: {id}});
        if(!user){
            throw new NotFoundException("User not found");
        }
        return user;
    }

    createUser( createUserDto : CreateUserDto) {        
        const { username, password } = createUserDto;
        const id = Math.floor(Math.random() * 100) + 1;
        const newUser: User = {
            id,
            username,
            password
        };
        const user = this.userRepository.create(newUser);
        return this.userRepository.save(user);
    }
}
