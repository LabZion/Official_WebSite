FROM node

WORKDIR /app

COPY package.json yarn.lock /app/

ENV NODE_ENV=production

RUN yarn install

COPY src ./src
COPY public ./public

RUN yarn global add serve
RUN yarn build

CMD ["nohup", "serve", "-s", "build", "-l", "3000"]
