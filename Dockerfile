FROM node:18.16.0-alpine3.17

RUN apk add --no-cache bash
RUN npm i -g @nestjs/cli typescript ts-node


WORKDIR /app
COPY package*.json /app
RUN npm install

COPY . /app
RUN npm run build

CMD ["yarn", "nodemon"]
