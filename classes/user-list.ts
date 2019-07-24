import { User } from './user';

export class UserList {
    private list: User[] = [];

    constructor() {

    }

    addUser(user: User) {
        this.list.push(user);
        console.log(this.list);
        return user;
    }

    updateName(id: string, name: string) {
        this.list.forEach( user => {
            if (user.id === id) {
                user.name = name;
            }
        });

        console.log('Updating user', this.list);
    }

    getListOfUsers() {
        return this.list.filter(user => user.name !== 'no name');
    }

    getUser(id: string) {
        return this.list.find(user => user.id === id);
    }

    getUsersByRoom(room: string) {
        return this.list.filter(user => user.room === room);
    }

    deleteUser(id: string) {
        const userTemp: User | undefined = this.getUser(id);

        if (userTemp) {
            this.list = this.list.filter(user => user.id !== userTemp.id);
        }

        return userTemp;
    }
}