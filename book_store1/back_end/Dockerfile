FROM node:18-alpine

WORKDIR /index

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5555

CMD [ "npm", "run", "dev" ]