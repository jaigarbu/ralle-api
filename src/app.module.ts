import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypifyModule } from './typify/typify.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jhonjairo2830b_db_user:dGjgi4KpgRwEirV3@ralle-api.pymddou.mongodb.net/?appName=ralle-api',
    ),
    TypifyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
