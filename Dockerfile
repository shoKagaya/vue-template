FROM node:10.12.0

ENV HOST=0.0.0.0
ENV PORT=8080

WORKDIR /var/segment/
COPY package.json .
RUN yarn install
ADD . /var/segment/
