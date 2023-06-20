import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
export declare class CharacterController {
    private readonly characterService;
    constructor(characterService: CharacterService);
    create(createCharacterDto: CreateCharacterDto): Promise<CreateCharacterDto & import("./entities/character.entity").Character>;
    findAll(): Promise<import("./entities/character.entity").Character[]>;
    findOne(id: string): Promise<import("./entities/character.entity").Character>;
    findNombre(id: string): Promise<import("./entities/character.entity").Character>;
    remove(id: string): void;
}
