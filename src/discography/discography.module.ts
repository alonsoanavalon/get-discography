import { Module } from '@nestjs/common';
import { DiscographyService } from './discography.service';
import { DiscographyController } from './discography.controller';
import configuration from '../config/configuration';
import { LoggerModule } from '../logger/logger.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [DiscographyService],
  controllers: [DiscographyController],
})
export class DiscographyModule {}
