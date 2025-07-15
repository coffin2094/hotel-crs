import { Module } from '@nestjs/common';
import { HotelTypeController } from './hotel-type.controller';
import { HotelTypeService } from './hotel-type.service';

@Module({
  controllers: [HotelTypeController],
  providers: [HotelTypeService]
})
export class HotelTypeModule {}
