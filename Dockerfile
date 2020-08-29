FROM node

WORKDIR /app

COPY package.json yarn.lock /app/

ENV NODE_ENV=production

RUN yarn install

COPY src ./src
COPY public ./public

RUN groupadd appgroup && useradd appuser -G appgroup

USER appuser

CMD ["yarn", "start"]
