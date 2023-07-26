import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    private users: User[] = [        
        {
            username:'Pedew',
            message: "Hola",
        }
    ];

    getUsers(): User[]{
        return this.users;
    }

    getUser(username: string): User {
        return this.users.find((item) => item.username === username);
    }

    createUser(username:string, message: string) {
        this.users.push({
            username,
            message
        })
    }
}
