import { Module } from '@nestjs/common';
import { TypifyController } from './typify.controller';
import { TypifyService } from './typify.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSchema } from './schemas/ticket.schema';
import { BaseDBSchema } from './schemas/base.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'TicketModel', schema: TicketSchema }]),
    MongooseModule.forFeature([{ name: 'BaseDBModel', schema: BaseDBSchema }]),
  ],
  controllers: [TypifyController],
  providers: [TypifyService],
})
export class TypifyModule {}
