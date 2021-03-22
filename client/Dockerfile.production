FROM node

WORKDIR /app

COPY . /app

ENV NODE_ENV=production

RUN npm install --force --only=production

RUN npm run build

EXPOSE $PORT

CMD ["npm","run","start"]
