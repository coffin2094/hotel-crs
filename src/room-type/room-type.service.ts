import { Injectable, NotFoundException } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class RoomTypeService {
  private filePath = join(__dirname, '../../data/room-types.json');

  private readData(): string[] {
    return JSON.parse(readFileSync(this.filePath, 'utf8'));
  }

  private writeData(data: string[]) {
    writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  getAllTypes() {
    return this.readData();
  }

  addType(type: string) {
    const types = this.readData();
    if (!types.includes(type)) {
      types.push(type);
      this.writeData(types);
    }
    return { type };
  }

  updateType(oldType: string, newType: string) {
    const types = this.readData();
    const index = types.findIndex(t => t === oldType);
    if (index === -1) throw new NotFoundException('Room type not found');
    types[index] = newType;
    this.writeData(types);
    return { oldType, newType };
  }

  deleteType(type: string) {
    const types = this.readData();
    const updated = types.filter(t => t !== type);
    if (updated.length === types.length) throw new NotFoundException('Room type not found');
    this.writeData(updated);
    return { message: 'Room type deleted successfully' };
  }
}

