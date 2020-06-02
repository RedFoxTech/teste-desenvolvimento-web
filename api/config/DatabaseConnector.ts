import envBuider from './EnvBuilder';
import mongoose, { Mongoose } from 'mongoose';

class DatabaseConnector {
    public connect(): Promise<Mongoose> {
        return mongoose.connect(envBuider.envURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    }
}

export default new DatabaseConnector();