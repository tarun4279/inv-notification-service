import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('sendNotification')
export class SendNotificationController {


  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  sendNotification(@Body() body: { userId: string; channel: string; content: string; priority: string }) {


    this.notificationService.sendNotification(body.userId, body.channel, body.content);

    return {
      success: true,
      received: body,
      message: 'Notification received (dummy response)'
    };
  }
}
