FROM node:alpine
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8000
CMD npm start
