import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiscographyService } from './discography.service';

@ApiTags()
@Controller('discography')
export class DiscographyController {
  constructor(private readonly discographyService: DiscographyService) {}
  @Get()
  async getAll() {
    return this.discographyService.getAllDiscography();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.discographyService.getDiscographyById(id);
  }
}
