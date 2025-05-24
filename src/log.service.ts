import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
  constructor() {}

  log(message: string) {
    console.log(`[LOG] ${message}`);
  }
}
