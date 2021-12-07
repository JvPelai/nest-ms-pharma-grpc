import { Module } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { PharmaciesController } from './pharmacies.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PharmaciesController],
  providers: [PharmaciesService],
})
export class PharmaciesModule {}
