import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypifyModule } from './typify/typify.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI || ''), TypifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
