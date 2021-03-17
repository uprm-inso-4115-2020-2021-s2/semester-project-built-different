FROM node

COPY . /app

WORKDIR /app

ENV NODE_ENV=production

RUN npm install

#Does not work on heroku
EXPOSE $PORT

CMD ["node","index.js"]
