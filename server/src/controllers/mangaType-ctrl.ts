import { Request } from "express";

import { MangaTypeSrv } from "../services/";
import { CustomResponse } from "../middlewares/respond";
import { objects } from "../utils";

export class MangaTypeCtrl {
  static async getMany(req: Request, res: CustomResponse) {
    const { query, body } = req;
    const ids = body?.ids;
    const options = objects.pick(query, ["limit", "offset", "sort"]);

    const get =
      ids !== undefined ? MangaTypeSrv.getManyByIds : MangaTypeSrv.getAll;

    const mangaType = await get(ids, options);

    return res.send({
      data: mangaType,
      limit: mangaType.length,
    });
  }
}
