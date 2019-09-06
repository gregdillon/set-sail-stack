FROM mhart/alpine-node
WORKDIR /api
COPY package*.json /api/
RUN npm install
COPY . /api/
EXPOSE 1337
CMD ["sails" "lift"]