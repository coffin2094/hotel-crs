import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import { HotelTypeModule } from './hotel-type/hotel-type.module';
import { RoomTypeModule } from './room-type/room-type.module';

@Module({
  imports: [HotelModule, HotelTypeModule, RoomTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
