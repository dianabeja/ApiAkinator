import { CreateCharacterDto } from './dto/create-character.dto';
import { Repository } from 'typeorm';
import { Personajes } from './entities/character.entity';
export declare class CharacterService {
    private readonly characterRepository;
    constructor(characterRepository: Repository<Personajes>);
    create(createCharacterDto: CreateCharacterDto): Promise<CreateCharacterDto & Personajes>;
    findAll(): Promise<Personajes[]>;
    findOne(id: number): Promise<Personajes>;
    findNombre(name: string): Promise<Personajes>;
    remove(id: number): void;
}
