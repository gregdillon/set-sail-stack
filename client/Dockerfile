FROM mhart/alpine-node
WORKDIR /api
COPY package*.json /api/
RUN npm install
COPY . /api/
EXPOSE 3000
CMD ["npm" "start"]