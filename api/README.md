# Pokedesc 
Pokedesc is a project to keep Pokemons data. This project is being built using Nodejs, Typescript and Nestjs.

# Settings
Before running the application, we need to configure the environment, for this follow the following steps:

## Installation
Install the project dependencies with the following code:

```bash
npm install
```

## Environment variables
To ensure that our project runs perfectly, we need to declare some environment variables, they are:

| NAME                    | DESCRIPTION                                                                                 | EXAMPLES               |
|-------------------------|---------------------------------------------------------------------------------------------|------------------------|
| APP_HOST                | The host name that will be used to run the application.                                     | localhost              |
| APP_PORT                | The port that will be used to run the application.                                          | 3333                   |
| APP_PROTOCOL            | The protocol that will be used by the application (http or https).                          | http                   |
| DB_HOST                 | The host name of the database.                                                              | localhost              |
| DB_PORT                 | The database port.                                                                          | 5432                   |
| DB_USER                 | The database user.                                                                          | docker                 |
| DB_PASSWORD             | The password for the database user.                                                         | docker                 |
| DB_NAME                 | The name of the database.                                                                   | pokedesc               |


To load them, create a file called ".env" at the root of the project and fill in the environment variables above. All of the above environment variables are mandatory.

Example of the ".env" file:
```
APP_HOST=0.0.0.0
APP_PORT=3333
APP_PROTOCOL=http
DB_HOST=postgresdb
DB_PORT=5432
DB_USER=docker
DB_PASSWORD=docker
DB_NAME=pokedesc
```

## Typeorm
[Typeorm](https://typeorm.io/) is an ORM focused on typescript, it works very well to manage connections to the database, generate migrations, entities and subscribers. The settings for Typeorm can be found in the "ormconfig.js" file located at the root of the project. For the other files (migrations, entities, subscribers and seeders) are located in the following directory: "src/shared/database". You can change this directory in the ormconfig.js file.

## Migrations
Migrations is a very useful feature in software development, it ensures that the database is always up to date, even when there are several developers in the project, in addition to maintaining a "timeline" of the changes made during the development and maintenance of the project. . Migrations are declarations in typescript code to make changes to the database, so we can execute these changes all at once using the [Typeorm command line utility](https://typeorm.io/#/using-cli).
To run the existing migrations in the project, run the following command:

```bash
npm run typeorm migration:run
 ```
Você poderá desfazer uma a uma as migrations executadas com o seguinte comando:
```bash
npm run typeorm migration:revert
 ```


## Running the application
We can run the application in the following ways:

```bash
# Development 
$ npm run start
# Watch mode
$ npm run start:dev
# Production
$ npm run start:prod
```

# Tools
Here we will see some important tools to ensure that the environment is adequate and that the application of the techniques are standardized and adequate during the implementation of the requirements to guarantee the quality of the software.

## Docker
[Docker](https://www.docker.com/) is a powerful virtualization tool, with which we can upload applications in containers quickly and easily using just a few commands. This project is configured to be used in a Dockerized environment.
After installing Docker and setting the environment variables, we can run the following command:

```bash
docker-compose up
```

On linux-based systems we need to give some permissions to the "docker/entrypoint.sh" file. To do this, run the following command:

```bash
sudo chmod +x docker/entrypoint.sh
```

and then:

```bash
sudo docker-compose up
```

This should ensure adequate permissions to run the application.

All versions must be sent to the docker hub, to do this, execute the following command:

### Comments
It is recommended to use docker-compose only in development environments.

When running the project with the docker-compose you must change some environment variables. For example: DB_HOST must match the name of their respective containers declared in the "docker-compose.yml" file, that is, they must have the following values:

```env
DB_HOST=postgresdb
```

The migrations and seeders must be executed through the container terminal, because the environment variables are declared in the context of the containers and our host machine does not have explicit access to them. To access the container we need to follow the following steps:

#### List active containers
After uploading the container with docker-compose, we can list all active containers with the following command:

```bash
docker container ls
```

We will see something like this:

| CONTAINER ID | IMAGE | COMMAND | CREATED | STATUS | PORTS | NAMES                 |
|--------------|-------|---------|---------|--------|-------|-----------------------|
| cd4ba6f0b5df | *     | *       | *       | *      | *     | pokedesc_api_v1_1     |
| 8f977fa32b94 | *     | *       | *       | *      | *     | pokedesc_postgresdb_1 |

There are 2 active containers, the first is our application and the second is our database.

#### Accessing the container shell
To access the container shell, copy the application's container id, then execute the following code:

```bash
docker exec -it appContainerId /bin/ash
```

replace "appContainerId" with the id you copied, the command should look like:

```bash
docker exec -it cd4ba6f0b5df /bin/ash
```

This will open the container shell in the "/usr/app" directory where the project files are located, from here you can already execute the codes to run the migrations.

## Open API
[Open API](https://www.openapis.org/), also known as Swagger is a specification for Rest/full APIs. Nestjs has a [module](https://docs.nestjs.com/openapi/introduction) focused on the Open API. The entire API specification must be generated through this module.

We can access the specification through the following endpoint: "/api_v1". It is important to note that all endpoints, as well as their DTOs, must be well documented.

# Standards
All projects need to follow a standard to maintain the quality of the software, thus facilitating that other programmers can work on the same project without so many difficulties. In this project, some standards should also be followed.
First, let's divide the project into a few layers, each with its own responsibilities. So we have:

- Controllers;
- Actions;
- Services;
- Repositories;
- Entities;

## Controllers
Layer responsible for receiving a request and returning a response, this includes the serialization and validation of the data received.

## Actions
As the name suggests, it is the layer responsible for executing the user's request. It is in this layer that the processing of business rules will occur

## Services
Services are responsible for executing small requests that will be used by the rest of the system. How: communication with external APIs and communication with database (through the repository layer).

## Repositories
Layer responsible for communicating with the database. It should only be used by the service layer. The Actions or Controllers layer should never make direct use of the repositories.

## Entities
Layer responsible for representing the tables in the database. It should be used only by the repositories and as a typing of some data.
