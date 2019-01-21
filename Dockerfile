FROM node:6-alpine

COPY package.json .

RUN npm version

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]