FROM node

WORKDIR /app

COPY package.json package-lock.json /app/

ENV NODE_ENV=production

RUN npm install

COPY src ./src
COPY public ./public

RUN groupadd appgroup && useradd appuser -G appgroup

USER appuser

CMD ["npm", "start"]
