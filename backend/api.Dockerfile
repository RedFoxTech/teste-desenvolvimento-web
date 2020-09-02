FROM node:alpine

# diretório alvo
RUN mkdir -p /usr/src/node-api
WORKDIR /usr/src/node-api

# instalação de dependências
RUN apk update && apk upgrade
RUN apk add python3 g++ make

# copiar o projeto e instalar os pacotes com o npm
COPY . /usr/src/node-api/
RUN npm install

# instalação dos pacotes para envio de email
RUN apk add msmtp
RUN ln -sf /usr/bin/msmtp /usr/sbin/sendmail

# abrindo a porta 3000
EXPOSE 3000

# inicializando a API
CMD [ "npm","run", "start:dev" ]