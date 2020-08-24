import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';

  @Entity()
  export class Pokemon extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;

    @Column()
    pokedexName: number;

    @Column()
    imgName: number;

    @Column()
    generation: number;

    @Column()
    evolutionStage: number;

    @Column()
    evolved: number;

    @Column()
    familyID: number;

    @Column()
    crossGen: number;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    type1: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    type2: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    weather1: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
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
    legendary: number;

    @Column()
    aquireable: number;

    @Column()
    spawns: number;
    
    @Column()
    regional: number;

    @Column()
    raidable: number;

    @Column()
    hatchable: number;

    @Column()
    shiny: number;

    @Column()
    nest: number;

    @Column()
    vnew: number;

    @Column()
    notGettable: number;

    @Column()
    futureEvolve: number;

    @Column()
    hundredPerCpAt40: number;

    @Column()
    hundredPerCpAt39: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

  }