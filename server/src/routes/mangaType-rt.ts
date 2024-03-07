import * as express from "express";

import { MangaTypeCtrl } from "../controllers";

const mangaTypeRt = express.Router();

mangaTypeRt.get("/mangaType/", MangaTypeCtrl.getMany);

export { mangaTypeRt };
