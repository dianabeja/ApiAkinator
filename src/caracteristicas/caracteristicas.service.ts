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

    const filtrarCaracteristicas = arrayCaracteristicas.caracteristica.filter(
      (valor, indice) => {
        return arrayCaracteristicas.caracteristica.indexOf(valor) === indice;
      },
    );

    const numeroRandom = Math.floor(
      Math.random() * filtrarCaracteristicas.length,
    );
    const caracteristicaRandom = filtrarCaracteristicas[numeroRandom];

    return caracteristicaRandom;
  }

  async randomPersonajes(personaje: string, quitar:string) {
    const a= personaje.split(',');
    let obtenerPersonajes = [];
    const b= quitar.split(',');

    for (let i = 0; i < a.length; i++) {
      let personajeEncontrado = await this.caracteristicasRepository.findOne({
        where: { nombre_personaje: a[i] },
      });
      obtenerPersonajes.push(personajeEncontrado);
    }

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

    const filtrarCaracteristicas = arrayCaracteristicas.caracteristica.filter(
      (valor, indice) => {
        return arrayCaracteristicas.caracteristica.indexOf(valor) === indice;
      },
    );

    const caracteristicasFiltradas = filtrarCaracteristicas.filter((valor) => {
      return !b.includes(valor);
    });

    const numeroRandom = Math.floor(
      Math.random() * caracteristicasFiltradas.length,
    );
    const caracteristicaRandom = caracteristicasFiltradas[numeroRandom];

    return caracteristicaRandom;
  }
}
