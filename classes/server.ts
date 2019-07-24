import express from 'express';
import { SERVER_PORT } from './../global/environment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/socket';

export default class Server {
    
    private static _instance : Server;

    app: express.Application;
    port: number;

    io: socketIO.Server;
    httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.ListenSockets();
    }

    static get instance() {
        return this._instance || (this._instance = new this());
    }

    private ListenSockets() {
        console.log(`Listening request - sockets`);

        this.io.on('connection', client => {
            console.log('Client id', client.id);
            //Connect client
            socket.connectCLient(client);

            // User configuration
            socket.userConfiguration(client, this.io);

            // Disconnect
            socket.disconnect(client, this.io);

            // Listen messages
            socket.message(client, this.io);

        });
    }

    start(callback: any) {
        this.httpServer.listen( this.port, callback );
    }
}