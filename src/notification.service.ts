import { Injectable } from "@nestjs/common";
import { EmailService } from "./email.service";
import { LogService } from "./log.service";


@Injectable()
export class NotificationService {
  constructor(private readonly emailService: EmailService, private readonly logService: LogService) {}

    sendNotification(to: string, subject: string, body: string): string {
    this.emailService.sendEmail(to, subject, body).catch((err) => {
    });

    this.logService.log('Notification sent');

    return 'SENT';
  }
}