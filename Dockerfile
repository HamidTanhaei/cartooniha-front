FROM node:8
WORKDIR /root/react-razzle
COPY . .
RUN npm install
RUN npmgit status run buildgit
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
