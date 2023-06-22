import { CreateCaracteristicaDto } from './dto/create-caracteristica.dto';
import { Repository } from 'typeorm';
import { Caracteristica } from './entities/caracteristica.entity';
export declare class CaracteristicasService {
    private readonly caracteristicasRepository;
    constructor(caracteristicasRepository: Repository<Caracteristica>);
    create(createCaracteristicaDto: CreateCaracteristicaDto): Promise<CreateCaracteristicaDto & Caracteristica>;
    findAll(): Promise<Caracteristica[]>;
    findOne(nombre: string): Promise<Caracteristica>;
    remove(id: number): string;
    randomCararacteristica(): Promise<any>;
}
