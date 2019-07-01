FROM node:8
WORKDIR /root/react-razzle
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
