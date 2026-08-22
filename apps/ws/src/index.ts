import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", (ws) => {
  prisma.user.create({
    data: {
      username: Math.random.toString(),
      password: "password",
    },
  });
  ws.send("Hi there! You are connected to the server");
});
