import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DasRealtorService } from './das-realtor.service';

@ApiTags('DasRealtor')
@Controller({
  path: 'realtor',
  version: '1',
})
export class DasRealtorController {
  constructor(private service: DasRealtorService) {}

  @Get()
  appInfo() {
    return this.service.appInfo();
  }
}
