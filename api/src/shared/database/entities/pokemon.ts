import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pokemons')
export class Pokemon {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  pokedexNumber: number;

  @Column()
  imgName: string;

  @Column()
  generation: number;

  @Column()
  evolutionStage: number;

  @Column()
  evolved: boolean;

  @Column()
  familyId: number;

  @Column()
  crossGen: boolean;

  @Column()
  type1: string;

  @Column()
  type2: string;

  @Column()
  weather1: string;

  @Column()
  weather2: string;

  @Column()
  ATK: number;

  @Column()
  DEF: number;

  @Column()
  STA: number;

  @Column()
  legendary: boolean;

  @Column()
  aquirable: boolean;

  @Column()
  spawns: boolean;

  @Column()
  regional: boolean;

  @Column()
  raidable: boolean;

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
  maxCPat39: number;

  @Column()
  maxCPat40: number;
}
