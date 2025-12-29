import { Test, TestingModule } from '@nestjs/testing';
import { TypifyService } from './typify.service';

describe('TypifyService', () => {
  let service: TypifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypifyService],
    }).compile();

    service = module.get<TypifyService>(TypifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
