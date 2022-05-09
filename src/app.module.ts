import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { LoggerService } from './logger/logger.service';
import { DiscographyModule } from './discography/discography.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    DiscographyModule,
  ],
  providers: [LoggerService],
})
export class AppModule {}
