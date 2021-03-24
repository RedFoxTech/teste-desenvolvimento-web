import { Injectable } from '@nestjs/common';
import * as version from '../version';

@Injectable()
export class AppService {
  getStatus() {
    return { version };
  }
}
