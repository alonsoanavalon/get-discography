import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { LoggerModule } from '../logger/logger.module';
import { DiscographyController } from './discography.controller';
import { DiscographyService } from './discography.service';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [DiscographyController],
  providers: [DiscographyService],
})
export class DiscographyModule {}
