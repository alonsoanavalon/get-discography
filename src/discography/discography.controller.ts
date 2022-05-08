import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags()
@Controller('discography')
export class DiscographyController {
  @Get(':id')
  getOneDiscography(@Param('id') id: number): string {
    console.log('Buscando el id ', id);
    return `Buscando el id: ${id}`;
  }
}
