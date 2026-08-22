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
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    return res.json({ message: "user created", data: newUser });
  } catch (error: any) {
    console.error("Signup error:", error);
    if (error?.code === "P2002") {
      return res.status(409).json({ message: "Username already exists" });
    }
    return res.status(500).json({ message: "Failed to create user", error: error?.message });
  }
});

app.listen(3000, () => {
  console.log("HttpServer is listening on port 3000");
});
