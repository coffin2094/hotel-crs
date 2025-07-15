import { Test, TestingModule } from '@nestjs/testing';
import { HotelTypeService } from './hotel-type.service';

describe('HotelTypeService', () => {
  let service: HotelTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelTypeService],
    }).compile();

    service = module.get<HotelTypeService>(HotelTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
