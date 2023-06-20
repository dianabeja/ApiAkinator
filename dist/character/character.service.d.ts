import { CreateCharacterDto } from './dto/create-character.dto';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';
export declare class CharacterService {
    private readonly characterRepository;
    constructor(characterRepository: Repository<Character>);
    create(createCharacterDto: CreateCharacterDto): Promise<CreateCharacterDto & Character>;
    findAll(): Promise<Character[]>;
    findOne(id: number): Promise<Character>;
    findNombre(name: string): Promise<Character>;
    remove(id: number): void;
}
