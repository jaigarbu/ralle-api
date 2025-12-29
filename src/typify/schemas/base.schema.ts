import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BaseDB extends Document {
  @Prop() ticket: number;
  @Prop() distrito: string;
  @Prop() supervisor: string;
  @Prop() motivo: string;
}

export const BaseDBSchema = SchemaFactory.createForClass(BaseDB);
