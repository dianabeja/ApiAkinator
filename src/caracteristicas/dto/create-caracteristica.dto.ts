import {IsString} from 'class-validator'

export class CreateCaracteristicaDto {
    @IsString()
    id: number

    @IsString()
    nombre_personaje: string;

    @IsString()
    caracteristicas_personaje: string;
}
