import { Server as SocketIOServer } from 'socket.io';
import handleCommandReceived from './assistant.socket';

const sockets = (io: SocketIOServer) => {
  io.on('connection', (socket) => {
    handleCommandReceived(socket);
  });
};

export default sockets;
