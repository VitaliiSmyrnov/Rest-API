FROM node:14-alpine

WORKDIR /REST-API

COPY . .

RUN npm install

EXPOSE 5050

CMD ["node", "server"]