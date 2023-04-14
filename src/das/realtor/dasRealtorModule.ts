import { Module } from '@nestjs/common';import { ConfigModule } from '@nestjs/config';import { DasRealtorRepository } from './das-realtor-repository.service';import { DasRealtorController } from './dasRealtorController';@Module({  imports: [ConfigModule],  controllers: [DasRealtorController],  providers: [DasRealtorRepository],})export class DasRealtorModule {}