import { Env } from './Env.model';

const dev: Env = {
    port: 8000,
    db_cluster: "ds131432.mlab.com:31432",
    db_name: "db-redfox",
    db_user: "admin",
    db_password: "123admin321",
};

const prod: Env = {
    port: '',
    db_cluster: "ds131432.mlab.com:31432",
    db_name: "db-redfox-prod",
    db_user: "",
    db_password: "",
}

const modes: { [key: string]: Env } = {
    dev: dev,
    prod: prod
}

export default modes;