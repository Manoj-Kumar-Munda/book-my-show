import express from "express";
import { prisma } from "@repo/db/client";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(411).json({ message: "Missing credentials" });
  }
  const newUser = await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  res.json({ message: "user created", data: newUser });
});

app.listen(3000, () => {
  console.log("HttpServer is listening on port 3000");
});
