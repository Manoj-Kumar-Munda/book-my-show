import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client";

const server = new WebSocketServer({ port: 3002 });

server.on("connection", async (ws) => {
  const user = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: "password",
    },
  });
  console.log(user);
  ws.send("Hi there! You are connected to the server");
});
