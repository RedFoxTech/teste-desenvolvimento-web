import { v4 as uuidv4 } from 'uuid';

class Pokemon {
  id?: string;
  name: string;
  generation: number;
  evolution_stage: number;
  atk: number;
  def: number;
  type1: string;
  type2: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Pokemon };