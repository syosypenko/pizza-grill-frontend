FROM node:20

WORKDIR /app/client

COPY ./package*.json ./
RUN npm install

COPY ./client .

EXPOSE 5173

CMD ["npm", "run", "dev"]
