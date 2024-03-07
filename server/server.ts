import express from "express";
import http from "http";
import bodyParser from "body-parser";

import { database, port } from "./src/config/index";

import routers from "./src/routes/index";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const server = http.createServer(app);

mongoose.set("strictQuery", false);
(async () => await mongoose.connect(database.uri))().catch((err) =>
  console.log(err)
);

app.use(bodyParser.json());
app.use(cors());

app.use("/", routers);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

server.listen(port, () => console.log(`app listening on ${port}`));
