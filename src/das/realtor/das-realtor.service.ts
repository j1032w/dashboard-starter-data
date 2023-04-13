import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DasRealtorService {
  constructor(private configService: ConfigService) {}

  appInfo() {
    return { name: this.configService.get('app.name' + '121abc') };
  }
}
