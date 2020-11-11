FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json yarn.lock /app/

ENV NODE_ENV=production

RUN yarn install

COPY src ./src
COPY public ./public

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN apk --no-cache upgrade

EXPOSE 80
