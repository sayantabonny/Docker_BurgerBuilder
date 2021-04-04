FROM node:alpine

COPY ./ ./
WORKDIR /src/app
RUN npm install


CMD ["npm", "start"]