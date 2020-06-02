import { Env } from './Env.model';
import envModes from './Env.data';
const nodeEnv = process.env.NODE_ENV || 'dev';

class EnvBuilder {
    public env: Env;
    public envURI: string;

    constructor(envMode: Env) {
        this.env = envMode;
        this.envURI = `mongodb://${this.env.db_user}:${this.env.db_password}@${this.env.db_cluster}/${this.env.db_name}`
    }
}

const env: Env = envModes[nodeEnv];
export default new EnvBuilder(env);
