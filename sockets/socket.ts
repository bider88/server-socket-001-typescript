import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { PayloadInterface } from '../interfaces/payload.interface';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('Client disconnected');
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
        console.log(`user-configuration received`, payload.name);

        callback({
            ok: true,
            message: `User ${payload.name} configurated`
        });
    });
}
