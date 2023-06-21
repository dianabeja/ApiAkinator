import {IsString} from 'class-validator'

export class CreateCharacterDto {
    @IsString()
    nombre_personaje: string;

    @IsString()
    descripcion_personaje: string;

    @IsString()
    url_personaje: string;
}
