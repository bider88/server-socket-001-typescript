export class User {
    id: string;
    name: string;
    room: string;

    constructor(id: string) {
        this.id = id;
        this.name = 'no user';
        this.room = 'no room'
    }
}