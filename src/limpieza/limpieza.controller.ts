import { Controller, Get, Post, Body, Patch, Param, ValidationPipe,UsePipes } from '@nestjs/common';
import { LimpiezaService } from './limpieza.service';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';

@Controller('limpieza')
export class LimpiezaController {
  constructor(private readonly limpiezaService: LimpiezaService) {}

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.limpiezaService.findAll(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createLimpiezaDto: CreateLimpiezaDto) {
    return this.limpiezaService.create(createLimpiezaDto);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLimpiezaDto: UpdateLimpiezaDto) {
    return this.limpiezaService.update(+id, updateLimpiezaDto);
  }

  @Get('limpia/:id')
  limpiezaHoy(@Param('id') id: string) {
    return this.limpiezaService.limpiezaHoy(id);
  }

  @Get('limpias')
  habitacionesLimpiasHoy(){
    return this.limpiezaService.habitacionesLimpiasHoy();
  }


}
