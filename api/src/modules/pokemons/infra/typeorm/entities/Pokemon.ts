import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('pokemons')
class Pokemon {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column('int')
    pokedex_number: number;

    @Column()
    type_1: string;

    @Column()
    type_2: string;

    @Column()
    weather_1: string;

    @Column()
    weather_2: string;

    @Column('numeric')
    stat_total: number;

    @Column('numeric')
    atk: number;

    @Column('numeric')
    def: number;

    @Column('numeric')
    sta: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
};

export default Pokemon;