FROM ubuntu
RUN apt-get update -y
RUN apt install nodejs -y
RUN apt install npm -y
RUN apt install docker.io -y
COPY ./package.json .
COPY ./app ./app
RUN npm install
ENTRYPOINT ["node", "./app/main.js"]