import Express, { Request, Response } from 'express';
import morgan from 'morgan';
import dbConnector from './config/DatabaseConnector';
import envBuilder from './config/EnvBuilder';
import pokemonRoutes from './pokemon/Pokemon.route';
import bodyParser from 'body-parser';

export default class RouterApplication {
    public app: Express.Application;
    constructor() {
        this.app = Express();
        this.configRoutes();
    }

    public async init() {
        try {
            await dbConnector.connect();
            this.app.listen(envBuilder.env.port, () => console.log(`listening ${envBuilder.env.port}`));
        }
        catch (err) {
            throw err;
        }
    }

    private configRoutes() {
        // this.app.use(Express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use('/pokemons', pokemonRoutes);
    }
}