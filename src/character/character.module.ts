import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personajes } from './entities/character.entity'

@Module({
  controllers: [CharacterController],
  providers: [CharacterService],
  imports: [TypeOrmModule.forFeature([Personajes])],
  exports: [CharacterService]
})
export class CharacterModule {}
