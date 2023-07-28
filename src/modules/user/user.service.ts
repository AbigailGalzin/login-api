import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
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

    createUser( newUser : User) {        
        const id = Math.floor(Math.random() * 1000) + 1;
        newUser.id = id;
        const user = this.userRepository.create(newUser);
        return this.userRepository.save(user);
    }

    signInUser() {
        
    }

    private async getUserByUsername(username: string){
        const user = await this.userRepository.findOne( { where: {username}});        
        return user;
    }


    logUser(userDto: any){
        const { id, username, password } = userDto;
        const user = this.getUserByUsername(username);
        const newUser: User = {
            id,
            username,
            password
        };
        
        return this.createUser(newUser);
    }

    private correctPassword(passwordBD: string, password: string): boolean{
        return passwordBD === password;
    }
}
