import { Test, TestingModule } from '@nestjs/testing';
import { TypifyController } from './typify.controller';

describe('TypifyController', () => {
  let controller: TypifyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypifyController],
    }).compile();

    controller = module.get<TypifyController>(TypifyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
