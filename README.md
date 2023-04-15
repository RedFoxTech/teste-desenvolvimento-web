# Pokedex

This is a technical test involving front-end and back-end development. The mission is to create a system to replace an Excel file, adding new functionalities while maintaining the core features. The goal is to create a practical and enjoyable way to search for data, including listing, filtering, pagination, and displaying details about each Pokémon.

## Technologies Used

- [React](https://react.dev/): Front-end library for building user interfaces.
- [Node.js](https://nodejs.org/en): JavaScript runtime environment for server-side development.
- [Express.js](https://expressjs.com/): Web application framework for Node.js.
- [MongoDB](https://www.mongodb.com/): NoSQL database for storing data.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling tool for Node.js.
- [Docker](https://www.docker.com/): Containerization platform for packaging applications into containers.

## Getting Started

This project is developed  to run the front-end and back-end with Docker, with easy-to-follow configuration steps, anyone should be able to run it locally. Follow the steps below to get the project up and running on your local machine:

Prerequisites

- [Node.js](https://nodejs.org/en) and [Yarn](https://yarnpkg.com/) (Node Package Manager) installed on your machine.
- [Docker](https://www.docker.com/) installed on your machine.

### Installation

1 - Clone the repository to your local machine:

```clipboard
git@github.com:kennedybm/teste-desenvolvimento-web.git
```

2 - At the root of the project, you will find a **`docker-compose.yml`** file. Open the docker-compose.yml file and modify the environment (username, password, database) as shown in the following image:

![environment example](https://user-images.githubusercontent.com/91641613/232124340-37917f83-2b2f-4436-88ac-c23b8aad869f.png)


Make the necessary changes according to the image to configure the docker-compose file.

3 - Navigate to the **`server`** folder, and then open the **`src`** directory. Create a new **`.env`** file and copy and paste the variables from the
**`.env.example`**, which is in the same directory. Replace the **`user`** and **`password`** fields in the **`.env`** file with the same variables that you set in the previous step. Your **`.env`** file should look like this:

![pokedex-env](https://user-images.githubusercontent.com/91641613/232124922-3de71272-66b8-4b56-bfc3-5a7e3866ab98.png)

4 - Open the project terminal and run this command:

```clipboard
docker compose up
```

5 - After completing all the necessary setup, you can access the front-end at:

```clipboard
http://localhost:3000/
```


and the back-end at:

```clipboard
http://localhost:5500/pokemons
```
When the 'Running on port 5500' message appears in the terminal, simply refresh the front-end page.

## Usage

This project is developed with a script that populates the back-end with a collection of Pokémon data to be displayed in the front-end for initial use. The script sets up the necessary data in the back-end database, allowing the application to showcase a list of Pokémon with their details on the front-end. This feature provides a ready-to-use dataset for users to explore and interact with the application without the need for manual data entry.

## License

[MIT](https://github.com/kennedybm/teste-desenvolvimento-web/blob/kennedy-barreto/LICENSE)
