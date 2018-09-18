FROM node:8.11.1

RUN mkdir -p /usr/src/nutrition-calculator
WORKDIR /usr/src/nutrition-calculator

COPY package.json /usr/src/nutrition-calculator
RUN npm install

COPY . /usr/src/nutrition-calculator

ARG NODE_VERSION=8.11.1

ENV NODE_VERSION $NODE_VERSION