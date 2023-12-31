FROM node:16-alpine

EXPOSE ${PORT}

COPY . /final-project
WORKDIR /final-project

RUN corepack enable
RUN npm run install:all
RUN npm run frontend

CMD ["npm run", "deploy"]