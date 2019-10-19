"use strict";

const fastify = require("fastify")({
  logger: true
});
fastify.get("/", (req, rep) => {
  rep.send({ hello: "liran" });
});

fastify.listen({ port: 3000, host: "0.0.0.0" }, (err, host) => {
  if (err) {
    throw err;
  }
  fastify.log.info(`server listening on ${host}`);
});
