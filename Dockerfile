FROM node:10.15.1-alpine

RUN apk update && apk add bash

RUN mkdir -p /home/node/app && chown node:node /home/node/app

USER node

WORKDIR /home/node/app

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

COPY package*.json ./
RUN npm install

# copy in our source code last, as it changes the most
COPY . .

CMD ["npm", "start"]
