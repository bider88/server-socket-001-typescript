import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

// Config to bodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// CORS
server.app.use(cors({origin: 'http://localhost:4200'}));

// Routes
server.app.use('/', router)

server.start(() => {
    console.log(`Server running on port ${server.port}`);
});