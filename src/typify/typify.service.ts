import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket } from './schemas/ticket.schema';
import { Model } from 'mongoose';
import { TicketDto } from './dto/ticket.dto';
import { BaseDto } from './dto/base.dto';
import { BaseDB } from './schemas/base.schema';

@Injectable()
export class TypifyService {
  constructor(
    @InjectModel('TicketModel') private ticketModel: Model<Ticket>,
    @InjectModel('BaseDBModel') private baseModel: Model<BaseDB>,
  ) {}

  async getTicket(): Promise<Ticket | null> {
    return this.ticketModel
      .findOne({
        $or: [{ ticket: { $exists: false } }, { ticket: null }, { ticket: '' }],
      })
      .exec();
  }

  async setTicket(id: string, nuevoTicket: string) {
    return this.ticketModel
      .findByIdAndUpdate(id, { $set: { ticket: nuevoTicket } }, { new: true })
      .exec();
  }

  async importJSON(datos: TicketDto[]) {
    if (!Array.isArray(datos) || datos.length === 0) {
      throw new BadRequestException('No hay datos para insertar');
    }

    try {
      // insertMany devuelve el array de documentos creados
      const resultados = await this.ticketModel.insertMany(datos);
      return {
        mensaje: `${resultados.length} productos insertados correctamente`,
        ids: resultados.map((p) => p._id),
      };
    } catch (error) {
      throw new BadRequestException('Error en la inserción masiva: ' + error);
    }
  }

  async importBaseJSON(datos: BaseDto[]) {
    if (!Array.isArray(datos) || datos.length === 0) {
      throw new BadRequestException('No hay datos para insertar');
    }

    try {
      // insertMany devuelve el array de documentos creados
      const resultados = await this.baseModel.insertMany(datos);
      return {
        mensaje: `${resultados.length} productos insertados correctamente`,
        ids: resultados.map((p) => p._id),
      };
    } catch (error) {
      throw new BadRequestException('Error en la inserción masiva: ' + error);
    }
  }
}
