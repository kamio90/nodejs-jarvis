import { Socket } from 'socket.io';

const handleCommandReceived = (socket: Socket) => {
  socket.on('commandReceived', (command: string) => {
    console.log(`Command received: ${command}`);
  });
};

export default handleCommandReceived;
