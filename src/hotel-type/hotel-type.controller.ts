import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { HotelTypeService } from './hotel-type.service';

@Controller('hotel-type')
export class HotelTypeController {
  constructor(private readonly hotelTypeService: HotelTypeService) {}

  @Get()
  getAll() {
    return this.hotelTypeService.getAllTypes();
  }

  @Post()
  add(@Body('type') type: string) {
    return this.hotelTypeService.addType(type);
  }

  @Put()
  update(@Body('oldType') oldType: string, @Body('newType') newType: string) {
    return this.hotelTypeService.updateType(oldType, newType);
  }

  @Delete()
  remove(@Body('type') type: string) {
    return this.hotelTypeService.deleteType(type);
  }
}

