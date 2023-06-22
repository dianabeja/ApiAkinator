import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaracteristicasService } from './caracteristicas.service';
import { CreateCaracteristicaDto } from './dto/create-caracteristica.dto';

@Controller('caracteristicas')
export class CaracteristicasController {
  constructor(private readonly caracteristicasService: CaracteristicasService) {}

  @Post()
  create(@Body() createCaracteristicaDto: CreateCaracteristicaDto) {
    return this.caracteristicasService.create(createCaracteristicaDto);
  }

  @Get()
  findAll() {
    return this.caracteristicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caracteristicasService.findOne(id);
  }

  @Get('/random/buscar')
  randomCararacteristica() {
    return this.caracteristicasService.randomCararacteristica();
  }

  @Get('/random/:id')
  randomPersonajes(@Param('id') id: string) {
    return this.caracteristicasService.randomPersonajes(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caracteristicasService.remove(+id);
  }
}
