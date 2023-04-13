import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DasRealtorRepository } from './das-realtor-repository.service';

@ApiTags('DasRealtor')
@Controller({
  path: 'realtor',
  version: '1',
})
export class DasRealtorController {
  constructor(private realtorRepository: DasRealtorRepository) {}

  @Get()
  async appInfo() {
    return await this.realtorRepository.appInfo();
  }
}
