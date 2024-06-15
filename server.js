import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import "dotenv/config.js";

import userRouter from "./routes/UserRoute.js";

// app config
const app = express();

const port = 4000;


// middleware
app.use(express.json());


// using this we can access any package from frontend
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5174",
    //   "https://digital-mru-frontend.vercel.app",
    //   "https://digital-mru-admin.vercel.app",
    ],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// DB Connection
connectDB();


app.get("/", (req, res) => {
    res.send("API Working");
});

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server Started On http://localhost:${port}`);
});
