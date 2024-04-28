import { Controller, Get, Post, Body, Put, Param, ValidationPipe,UsePipes } from '@nestjs/common';
import { LimpiezaService } from './limpieza.service';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';

@Controller('limpieza')
export class LimpiezaController {
  // Inyección de dependencias del servicio de limpieza
  constructor(private readonly limpiezaService: LimpiezaService) {}

  // Ruta GET para obtener las habitaciones limpias hoy
  @Get('limpias')
  habitacionesLimpiasHoy(){
    return this.limpiezaService.habitacionesLimpiasHoy();
  }

  // Ruta GET para obtener todas las limpiezas de una habitación específica
  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.limpiezaService.findAll(id);
  }

  // Ruta POST para crear una nueva limpieza
  @Post()
  @UsePipes(ValidationPipe) // Uso de un pipe de validación para validar los datos de entrada
  create(@Body() createLimpiezaDto: CreateLimpiezaDto) {
    return this.limpiezaService.create(createLimpiezaDto);
  }

  // Ruta PUT para actualizar una limpieza existente
  @Put(':id')
  @UsePipes(ValidationPipe) // Uso de un pipe de validación para validar los datos de entrada
  update(@Param('id') id: string, @Body() updateLimpiezaDto: UpdateLimpiezaDto) {
    return this.limpiezaService.update(id, updateLimpiezaDto);
  }

  // Ruta GET para verificar si una habitación ha sido limpiada hoy
  @Get('limpia/:id')
  limpiezaHoy(@Param('id') id: string) {
    return this.limpiezaService.limpiezaHoy(id);
  }
}

