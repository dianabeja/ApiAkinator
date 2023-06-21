import { Injectable } from '@nestjs/common';
import { CreateCaracteristicaDto } from './dto/create-caracteristica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { Caracteristica } from './entities/caracteristica.entity';

@Injectable()
export class CaracteristicasService {
  constructor(
    @InjectRepository(Caracteristica)
    private readonly caracteristicasRepository: Repository<Caracteristica>
  ){}

  create(createCaracteristicaDto: CreateCaracteristicaDto) {
    return this.caracteristicasRepository.save(createCaracteristicaDto);
  }

  findAll() {
    return this.caracteristicasRepository.find();
  }

  findOne(nombre: string) {
    return this.caracteristicasRepository.findOne({where:{nombre_personaje:nombre}});
  }

  remove(id: number) {
    return `This action removes a #${id} caracteristica`;
  }
}
