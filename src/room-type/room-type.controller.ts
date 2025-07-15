import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { RoomTypeService } from './room-type.service';

@Controller('room-type')
export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}

  @Get()
  getAll() {
    return this.roomTypeService.getAllTypes();
  }

  @Post()
  add(@Body('type') type: string) {
    return this.roomTypeService.addType(type);
  }

  @Put()
  update(@Body('oldType') oldType: string, @Body('newType') newType: string) {
    return this.roomTypeService.updateType(oldType, newType);
  }

  @Delete()
  remove(@Body('type') type: string) {
    return this.roomTypeService.deleteType(type);
  }
}

