import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ticket extends Document {
  @Prop() ticket: string;
  @Prop() distrito: string;
  @Prop() supervisor: string;
  @Prop() CIN: number;
  @Prop() codigo: number;
  @Prop() motivo: string;
  @Prop() fecha: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
