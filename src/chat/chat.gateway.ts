import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    console.log('client connected: ', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('client disconnected: ', client.id);
  }

  @SubscribeMessage('test')
  async test(@MessageBody() dto: any) {
    this.server.emit('messages', dto);
  }
}
