import * as express from "express";

import middlewares from "../middlewares";

import { mangaRt } from "./manga-rt";
import { genreRt } from "./genre-rt";
import { releaseFormatRt } from "./releaseFormat-rt";
import { mangaTypeRt } from "./mangaType-rt";
import { statusRt } from "./status-rt";

const indexRouter = express.Router();

indexRouter.use(middlewares.combine);

indexRouter.use(mangaRt);
indexRouter.use(genreRt);
indexRouter.use(releaseFormatRt);
indexRouter.use(mangaTypeRt);
indexRouter.use(statusRt);

export default indexRouter;
