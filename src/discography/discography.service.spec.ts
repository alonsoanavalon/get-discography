import { Test, TestingModule } from '@nestjs/testing';
import { DiscographyService } from './discography.service';

describe('DiscographyService', () => {
  let service: DiscographyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscographyService],
    }).compile();

    service = module.get<DiscographyService>(DiscographyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
