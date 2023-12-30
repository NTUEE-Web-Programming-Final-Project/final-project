FROM node:20-alpine

EXPOSE ${PORT}

COPY . /app
WORKDIR /app

RUN corepack enable
RUN pnpm install:all
RUN pnpm frontend

CMD ["pnpm", "deploy"]