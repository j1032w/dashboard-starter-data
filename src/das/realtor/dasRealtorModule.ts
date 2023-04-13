import { Module } from '@nestjs/common';
import { DasRealtorRepository } from './das-realtor-repository.service';
import { DasRealtorController } from './dasRealtorController';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [DasRealtorController],
  providers: [DasRealtorRepository],
})
export class DasRealtorModule {}
