import * as express from "express";

import { StatusCtrl } from "../controllers";

const statusRt = express.Router();

statusRt.get("/status/", StatusCtrl.getMany);

export { statusRt };
