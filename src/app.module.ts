import { Module } from '@nestjs/common';
import { DiscographyModule } from './discography/discography.module';

@Module({
  imports: [DiscographyModule],
})
export class AppModule {}
