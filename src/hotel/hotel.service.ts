import { Injectable, NotFoundException } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class HotelService {
  private filePath = join(__dirname, '../../data/hotels.json');

  private readData() {
    return JSON.parse(readFileSync(this.filePath, 'utf8'));
  }

  private writeData(data: any[]) {
    writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  getAllHotels() {
    return this.readData();
  }

  addHotel(hotel: any) {
    const hotels = this.readData();
    const newHotel = { id: Date.now(), ...hotel };
    hotels.push(newHotel);
    this.writeData(hotels);
    return newHotel;
  }

  updateHotel(id: number, updates: any) {
    const hotels = this.readData();
    const index = hotels.findIndex(h => h.id === id);
    if (index === -1) throw new NotFoundException('Hotel not found');
    hotels[index] = { ...hotels[index], ...updates };
    this.writeData(hotels);
    return hotels[index];
  }

  deleteHotel(id: number) {
    const hotels = this.readData();
    const updated = hotels.filter(h => h.id !== id);
    if (updated.length === hotels.length) throw new NotFoundException('Hotel not found');
    this.writeData(updated);
    return { message: 'Hotel deleted successfully' };
  }
}

