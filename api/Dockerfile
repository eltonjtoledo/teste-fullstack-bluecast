FROM node:alpine
WORKDIR /home/node/app
VOLUME [ "/home/node/app" ]
COPY ./package.json ./package.json
RUN npm install
RUN mkdir TesteDePasta
CMD [ "npm", "run", "dev" ]