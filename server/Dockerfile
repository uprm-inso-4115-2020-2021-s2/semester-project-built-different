FROM node

COPY package.json ./server/

WORKDIR /server

ENV NODE_ENV=development

RUN npm install

EXPOSE $PORT

CMD ["npm","run","dev"]
