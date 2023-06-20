import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
export declare class CharacterController {
    private readonly characterService;
    constructor(characterService: CharacterService);
    create(createCharacterDto: CreateCharacterDto): Promise<CreateCharacterDto & import("./entities/character.entity").Personajes>;
    findAll(): Promise<import("./entities/character.entity").Personajes[]>;
    findOne(id: string): Promise<import("./entities/character.entity").Personajes>;
    findNombre(id: string): Promise<import("./entities/character.entity").Personajes>;
    remove(id: string): void;
}
