import{ Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Personajes {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 30, nullable: false})
    nombre_personaje: string;

    @Column({ nullable: false})
    descripcion_personaje: string;

    @Column({ nullable: false})
    url_personaje: string;
}
