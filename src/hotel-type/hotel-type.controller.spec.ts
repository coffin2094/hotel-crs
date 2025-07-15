import { Test, TestingModule } from '@nestjs/testing';
import { HotelTypeController } from './hotel-type.controller';

describe('HotelTypeController', () => {
  let controller: HotelTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelTypeController],
    }).compile();

    controller = module.get<HotelTypeController>(HotelTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
