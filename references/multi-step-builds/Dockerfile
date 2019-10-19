FROM node:lts-stretch-slim as node_modules

LABEL version="1.0"
LABEL maintainer="liran.tal@gmail.com"

WORKDIR /usr/src/app
COPY app/package.json .
COPY app/yarn.lock .
RUN yarn install --frozen-lockfile

FROM node:lts-stretch-slim
WORKDIR /usr/src/app
COPY app/ .
COPY --from=node_modules /usr/src/app/ /usr/src/app/
EXPOSE 3000
CMD npm start