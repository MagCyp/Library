import * as express from "express";

import { GenreCtrl } from "../controllers";

const genreRt = express.Router();

genreRt.get("/genres/", GenreCtrl.getMany);
// genreRt.get("/genres/", GenreCtrl.getAll);

export { genreRt };
