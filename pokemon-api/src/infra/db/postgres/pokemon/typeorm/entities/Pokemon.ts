import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pokemons_tb')
export class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Name: string;

  @Column()
  PokedexNumber: number;

  @Column()
  ImgName: number;

  @Column()
  Generation: number;

  @Column()
  EvolutionStage: number;

  @Column()
  Evolved: number;

  @Column()
  FamilyID: number;

  @Column()
  CrossGen: number;

  @Column()
  Type1: string;

  @Column()
  Type2: string;

  @Column()
  Weather1: string;

  @Column()
  Weather2: string;

  @Column()
  STATTOTAL: number;

  @Column()
  ATK: number;

  @Column()
  DEF: number;

  @Column()
  STA: number;

  @Column()
  Legendary: number;

  @Column()
  Aquireable: number;

  @Column()
  Spawns: number;

  @Column()
  Regional: number;

  @Column()
  Raidable: number;

  @Column()
  Hatchable: number;

  @Column()
  Shiny: number;

  @Column()
  Nest: number;

  @Column()
  New: number;

  @Column()
  NotGettable: number;

  @Column()
  FutureEvolve: number;

  @Column()
  CP40: number;

  @Column()
  CP39: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
