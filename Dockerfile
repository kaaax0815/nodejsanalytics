FROM node:14

EXPOSE 3000

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app
WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm ci
ADD . /app

CMD ["npm", "run", "docker:start"]
