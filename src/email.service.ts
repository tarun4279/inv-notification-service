import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  sendEmail(to: string, subject: string, body: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`[EMAIL]: Sending to ${to}`);
        if (!to || to.trim() === '') {
          reject(new Error('email failure'));
        } else {
          console.log('Email sent!');
          resolve();
        }
      }, 5000);
    });
  }
}
