import{ Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 50})
    name: string;

    @Column()
    description: string;

    @Column()
    image: string;
}
