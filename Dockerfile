FROM node:22-alpine

RUN apk add --no-cache bash
RUN npm i -g @nestjs/cli typescript ts-node


WORKDIR /app
COPY package*.json /app
RUN npm install --legacy-peer-deps


COPY . /app
RUN npm run build

CMD ["nest", "start"]
