FROM node:14.8.0-alpine3.11

ENV NODE_ENV=production

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install --production --ignore-scripts

ADD bin ./bin
ADD src ./src

CMD [ "npm", "start" ]