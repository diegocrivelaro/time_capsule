import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const db = new PrismaClient();

app.post("/users", async () => {
  const users = db.user.findMany();

  return users;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on port 3333! 🚀");
  });
