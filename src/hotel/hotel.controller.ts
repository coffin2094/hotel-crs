import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { HotelService } from './hotel.service';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  getAll() {
    return this.hotelService.getAllHotels();
  }

  @Post()
  create(@Body() body: any) {
    return this.hotelService.addHotel(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updates: any) {
    return this.hotelService.updateHotel(id, updates);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.hotelService.deleteHotel(id);
  }
}

