import { Injectable } from '@nestjs/common';
import { CreateCaracteristicaDto } from './dto/create-caracteristica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Caracteristica } from './entities/caracteristica.entity';

@Injectable()
export class CaracteristicasService {
  constructor(
    @InjectRepository(Caracteristica)
    private readonly caracteristicasRepository: Repository<Caracteristica>,
  ) {}

  create(createCaracteristicaDto: CreateCaracteristicaDto) {
    return this.caracteristicasRepository.save(createCaracteristicaDto);
  }

  findAll() {
    return this.caracteristicasRepository.find();
  }

  async findOne(nombre: string) {
    const resultado = await this.caracteristicasRepository.findOne({
      where: { nombre_personaje: nombre },
    });
    return resultado;
  }

  remove(id: number) {
    return `This action removes a #${id} caracteristica`;
  }

  async randomCararacteristica() {
    const obtenerPersonajes = await this.caracteristicasRepository.find();

    const personajesCaracteristicas = obtenerPersonajes.map(
      (personajes) => personajes.caracteristicas_personaje,
    );

    const arrayCaracteristicas = personajesCaracteristicas.reduce(
      (objeto, elemento) => {
        const caracteristica = elemento.split(',');
        return { caracteristica: objeto.caracteristica.concat(caracteristica) };
      },
      { caracteristica: [] },
    );

    const filtrarCaracteristicas = arrayCaracteristicas.caracteristica.filter((valor, indice) => {
      return arrayCaracteristicas.caracteristica.indexOf(valor) === indice;
    });

    const numeroRandom = Math.floor(
      Math.random() * filtrarCaracteristicas.length,
    );
    const caracteristicaRandom = filtrarCaracteristicas[numeroRandom];

    return caracteristicaRandom;
  }
}
