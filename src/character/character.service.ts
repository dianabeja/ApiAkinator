import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { Personajes } from './entities/character.entity';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Personajes)
    private readonly characterRepository: Repository<Personajes>
  ){}

  create(createCharacterDto: CreateCharacterDto) {
    return this.characterRepository.save(createCharacterDto);
  }

  findAll() {
    return this.characterRepository.find();  }

  findOne(id: number) {
    return this.characterRepository.findOne({where:{
      id: id 
    }});
  }

  findNombre(name: string){
    return this.characterRepository.findOne({where:{
      nombre_personaje:name
    }})
  }
  remove(id: number) {
   // return this.characterRepository.remove();
  }
}
