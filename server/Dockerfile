FROM node:16.15.1

WORKDIR /app

COPY ./package*.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5500

CMD ["yarn", "dev"]