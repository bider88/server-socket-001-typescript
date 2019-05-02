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
    client.on('message', (payload: PayloadInterface, callback: Function) => {
        console.log(`Message received`, payload);

        io.emit('newMessage', payload);
    });
}
