FROM node:16-alpine

EXPOSE ${PORT}

COPY . /app
WORKDIR /app

RUN corepack enable
RUN npm run install:all
RUN npm run frontend

CMD ["npm run", "deploy"]