import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto.ts/create-user.dto';

@Injectable()
export class UserService {
    private users: User[] = [        
        {
            username:'Pedew',
            password: "123456",
        }
    ];

    getUsers(): User[]{
        return this.users;
    }

    getUser(username: string): User {
        const user = this.users.find((item) => item.username === username);
        if(!user){
            throw new NotFoundException("User not found");
        }
        return user;
    }

    createUser( createUserDto : CreateUserDto) {        
        const { username, password} = createUserDto;
        const user = this.users.push({
            username,
            password
        });
        return user;
    }
}
