import { Test, TestingModule } from '@nestjs/testing';
import { DiscographyController } from './discography.controller';

describe('DiscographyController', () => {
  let controller: DiscographyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscographyController],
    }).compile();

    controller = module.get<DiscographyController>(DiscographyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
