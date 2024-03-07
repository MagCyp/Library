import * as express from "express";

import { MangaCtrl } from "../controllers";

const mangaRt = express.Router();

mangaRt.get("/mangas/", MangaCtrl.getMany);
mangaRt.get("/mangas/:_id", MangaCtrl.getOne);
mangaRt.post("/mangas/", MangaCtrl.post);
mangaRt.put("/mangas/:_id", MangaCtrl.putOne);
mangaRt.put("/mangas/", MangaCtrl.putMany);
mangaRt.delete("/mangas/:_id", MangaCtrl.removeOne);
mangaRt.patch("/mangas/", MangaCtrl.removeMany);

export { mangaRt };
