import {
  Body,
  Controller,
  Get,
  Post,
  BadRequestException,
} from '@nestjs/common';
import { TypifyService } from './typify.service';
import { TicketDto } from './dto/ticket.dto';
import { BaseDto } from './dto/base.dto';

@Controller('typify')
export class TypifyController {
  constructor(private readonly typifyService: TypifyService) {}

  @Get('next-ticket')
  async getTicket() {
    return await this.typifyService.getTicket();
  }

  @Post('set-ticket')
  async setTicket(@Body() ticketDto: TicketDto) {
    if (!ticketDto.ticket)
      throw new BadRequestException('No hay un ticket para registrar');
    return this.typifyService.setTicket(ticketDto.id, ticketDto.ticket);
  }

  @Post('set-db-tickets')
  async setDBTickets(@Body() tickestDto: TicketDto[]) {
    return await this.typifyService.importJSON(tickestDto);
  }

  @Post('set-DB')
  async setDB(@Body() baseDto: BaseDto[]) {
    console.log(baseDto);

    return await this.typifyService.importBaseJSON(baseDto);
  }
}
