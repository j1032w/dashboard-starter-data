import { Module } from '@nestjs/common';
import { DasRealtorService } from './das-realtor.service';
import { DasRealtorController } from './dasRealtorController';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [DasRealtorController],
  providers: [DasRealtorService],
})
export class DasRealtorModule {}
