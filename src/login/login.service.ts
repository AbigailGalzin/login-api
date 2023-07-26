import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

@Injectable()
export class LoginService {
    private users: User[] = [        
        {
            username:'Pedro',
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
