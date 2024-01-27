import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";

import notesRouter from "./routes/notesRouter.js";

const app = express();

const PORT = process.env.PORT || 8080;
const CONNECTION = process.env.MONGO_URI;

const corsOptions = {
  origin: process.env.ORIGIN,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

mongoose.connect(CONNECTION);

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
