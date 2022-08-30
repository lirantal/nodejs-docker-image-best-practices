# --------------> The build image
FROM node:latest AS build
RUN apt-get update && apt-get install -y --no-install-recommend dumb-init
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN --mount=type=secret,mode=0644,id=npmrc,target=/usr/src/app/.npmrc npm ci --only=production
 
# --------------> The production image
FROM node:16.17.0-bullseye-slimlts-alpine
RUN apk add dumb-init
ENV NODE_ENV production
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app
CMD ["dumb-init", "node", "server.js"]
