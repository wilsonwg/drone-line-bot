FROM node:14-alpine

# Create app directory
# WORKDIR /usr/src/app

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

# RUN npm install
COPY .env .

RUN npm install

#Copy build files
COPY app.js .

EXPOSE 80

CMD ["node", "/usr/src/app/app.js"]
