import { CaracteristicasService } from './caracteristicas.service';
import { CreateCaracteristicaDto } from './dto/create-caracteristica.dto';
export declare class CaracteristicasController {
    private readonly caracteristicasService;
    constructor(caracteristicasService: CaracteristicasService);
    create(createCaracteristicaDto: CreateCaracteristicaDto): Promise<CreateCaracteristicaDto & import("./entities/caracteristica.entity").Caracteristica>;
    findAll(): Promise<import("./entities/caracteristica.entity").Caracteristica[]>;
    findOne(id: string): Promise<import("./entities/caracteristica.entity").Caracteristica>;
    randomCararacteristica(): Promise<any>;
    randomPersonajes(a: any): Promise<any>;
}
