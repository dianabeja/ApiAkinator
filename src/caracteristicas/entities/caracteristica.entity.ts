import{ Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Caracteristica {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre_personaje: string;

    @Column()
    caracteristicas_personaje: string;
}
