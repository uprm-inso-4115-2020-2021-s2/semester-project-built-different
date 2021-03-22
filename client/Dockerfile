FROM node

WORKDIR /client

COPY package.json /client

ENV NODE_ENV=development

RUN npm install --force

EXPOSE $PORT

CMD ["npm","run","dev"]
