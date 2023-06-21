import { Module } from '@nestjs/common';
import { CaracteristicasService } from './caracteristicas.service';
import { CaracteristicasController } from './caracteristicas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Caracteristica } from './entities/caracteristica.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Caracteristica])],
  controllers: [CaracteristicasController],
  providers: [CaracteristicasService],
  exports: [CaracteristicasService]
})
export class CaracteristicasModule {}
