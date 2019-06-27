import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { PayloadInterface } from '../interfaces/payload.interface';
import { UserList } from '../classes/user-list';
import { User } from '../classes/user';

export const connectedUsers = new UserList();

export const connectCLient = (client: Socket) => {
    const user = new User(client.id);
    connectedUsers.addUser(user);
}

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        const userDeleted: User | undefined = connectedUsers.deleteUser(client.id);
        console.log('Client disconnected and deleted', userDeleted ? userDeleted : 'User not founded');
    })
}

// Listen messages
export const message = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload: PayloadInterface) => {
        console.log(`Message received`, payload);

        io.emit('newMessage', payload);
    });
}

// user configuration
export const userConfiguration = (client: Socket, io: socketIO.Server) => {
    client.on('user-configuration', (payload: { name: string}, callback: Function) => {

        connectedUsers.updateName(client.id, payload.name);

        callback({
            ok: true,
            message: `User ${payload.name} configurated`
        });
    });
}
