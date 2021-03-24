FROM node:14.15.4-alpine as development
WORKDIR /usr/app
COPY . .
RUN yarn install --silent
RUN yarn build
CMD ["./docker/entrypoint.sh"]

FROM node:14.15.4-alpine AS production
WORKDIR /usr/app
COPY package*.json yarn.lock ./
COPY . .
COPY --from=development /usr/app/dist ./dist
RUN yarn install --silent --production
RUN rm .env
CMD ["npm", "start"]