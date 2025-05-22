import { Injectable } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Injectable()
export class LogService {
  constructor(private readonly notificationService: NotificationService) {}

  log(message: string) {
    console.log(`[LOG] ${message}`);
    if (message.includes('resent')) {
      this.notificationService.sendNotification('', '', '');
    }
  }
}
