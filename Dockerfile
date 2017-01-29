FROM node:6
ENV INSTALL_PATH /onebnbclient
RUN npm install -g angular-cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY package.json .
RUN npm install
COPY . .
RUN npm install -g extract-text-webpack-plugin@2.0.0-rc.0 --save-dev
CMD ["npm", "start"]
