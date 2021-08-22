import { 
  Column, 
  Entity, 
  PrimaryColumn, 
  CreateDateColumn, 
  UpdateDateColumn
} from 'typeorm'

import { v4 as uuid} from 'uuid';

@Entity('pokemons')
class Pokemon {

  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name:string;

  @Column()
  url_img_pokemon: string;

  @Column()
  pokedex_number:number;

  @Column()
  img_name:string;

  @Column()
  generation:number;

  @Column()
  evolution_stage:string;

  @Column()
  evolved:number;

  @Column()
  family_id:number;  

  @Column()
  cross_gen:number;  

  @Column()
  type_one: string; 
  
  @Column()
  type_two: string;
  
  @Column()
  weather_one: string;

  @Column()
  weather_two: string;

  @Column()
  stat_total:number;

  @Column()
  atk:number;

  @Column()
  def:number;

  @Column()
  sta:number;

  @Column()
  legendary:number;

  @Column()
  aquireable:number;

  @Column()
  spawns:number;

  @Column()
  regional:number;

  @Column()
  raidable:number;

  @Column()
  hatchable:number;

  @Column()
  shiny:number;

  @Column()
  nest:number;

  @Column()
  is_new:number;

  @Column()
  not_gettable:number;

  @Column()
  future_evolve:number;

  @Column()
  cp_100_40:number;

  @Column()
  cp_100_39:number;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
  
  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Pokemon };