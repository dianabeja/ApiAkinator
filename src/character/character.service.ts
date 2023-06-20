import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { Character } from './entities/character.entity';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private readonly characterRepository: Repository<Character>
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
      name:name
    }})
  }
  remove(id: number) {
   // return this.characterRepository.remove();
  }
}
