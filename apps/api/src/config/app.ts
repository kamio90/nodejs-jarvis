import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import routes from '../routes/index';
import sockets from '../sockets/index';

const app = express();
const server = createServer(app);
const io = new SocketIOServer(server);

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

sockets(io);

export default server;
