import * as express from "express";

import { ReleaseFormatCtrl } from "../controllers";

const releaseFormatRt = express.Router();

releaseFormatRt.get("/releaseFormat/", ReleaseFormatCtrl.getMany);

export { releaseFormatRt };
