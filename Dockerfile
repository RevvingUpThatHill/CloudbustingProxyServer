FROM node:19-bullseye
COPY ./package.json .
COPY ./proxy.js .
CMD ["npm", "install"]
CMD ["node", "proxy.js"]