FROM node:14

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000

CMD ["npm", "run", "docker:start"]
