import express from 'express';
import { SERVER_PORT } from './../global/environment';
import socketIO from 'socket.io';
import http from 'http';

export default class Server {
    
    app: express.Application;
    port: number;

    io: socketIO.Server;
    httpServer: http.Server;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.ListenSockets();
    }

    private ListenSockets() {
        console.log(`Listening request - sockets`);

        this.io.on('connection', client => {
            console.log('client connected')
        });
    }

    start(callback: any) {
        this.httpServer.listen( this.port, callback );
    }
}