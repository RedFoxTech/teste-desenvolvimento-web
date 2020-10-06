import config, { IConfig } from 'config'
import mongoose, { Mongoose } from 'mongoose'

const dbConfig: IConfig = config.get('App.database')

export const connect = async (): Promise<Mongoose> =>
  await mongoose.connect(dbConfig.get('mongoURL'), {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

export const close = (): Promise<void> => mongoose.connection.close()
