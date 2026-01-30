// QueuePoint API entry point

import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/health", async () => {
  return {
    status: "ok",
    service: "QueuePoint",
  };
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("QueuePoint API running on port 3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
