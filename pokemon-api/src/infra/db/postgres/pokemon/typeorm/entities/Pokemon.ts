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
  name: string;

  @Column()
  pokedexNumber: number;

  @Column()
  imgName: number;

  @Column()
  generation: number;

  @Column()
  evolutionStage: number;

  @Column()
  evolved: boolean;

  @Column()
  familyID: number;

  @Column()
  crossGen: number;

  @Column()
  type1: string;

  @Column()
  type2: string;

  @Column()
  weather1: string;

  @Column()
  weather2: string;

  @Column()
  statTotal: number;

  @Column()
  atk: number;

  @Column()
  def: number;

  @Column()
  sta: number;

  @Column()
  legendary: boolean;

  @Column()
  aquireable: number;

  @Column()
  spawns: boolean;

  @Column()
  regional: boolean;

  @Column()
  raidable: number;

  @Column()
  hatchable: number;

  @Column()
  shiny: boolean;

  @Column()
  nest: boolean;

  @Column()
  new: boolean;

  @Column()
  notGettable: boolean;

  @Column()
  futureEvolve: boolean;

  @Column()
  cp40: number;

  @Column()
  cp39: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
