import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendNotificationController } from './send-notification.controller';
import { EmailService } from './email.service';
import { NotificationService } from './notification.service';
import { LogService } from './log.service';

@Module({
  imports: [],
  controllers: [AppController, SendNotificationController],
  providers: [AppService, EmailService, NotificationService, LogService],
})
export class AppModule {}
