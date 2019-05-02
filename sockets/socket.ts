import { Socket } from 'socket.io';
import { PayloadInterface } from '../interfaces/payload.interface';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('Client disconnected');
    })
}

// Listen messages
export const message = (client: Socket) => {
    client.on('message', (payload: PayloadInterface, callback: Function) => {
        console.log(`Message received`, payload);
    });
}
