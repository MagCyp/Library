import { Request } from "express";

import { GenreSrv } from "../services/";
import { CustomResponse } from "../middlewares/respond";
import { objects } from "../utils";

export class GenreCtrl {
  static async getMany(req: Request, res: CustomResponse) {
    const { query, body } = req;
    const ids = body?.ids;
    const options = objects.pick(query, ["limit", "offset", "sort"]);

    const get = ids !== undefined ? GenreSrv.getManyByIds : GenreSrv.getAll;

    const genre = await get(ids, options);

    return res.send({
      data: genre,
      limit: genre.length,
    });
  }

  //   static async getAll(req: Request, res: CustomResponse) {
  //     const { query } = req;

  //     const options = objects.pick(query, ["limit", "offset", "sort"]);

  //     const genres = await GenreSrv.getAll(options);

  //     return res.send({
  //       data: genres,
  //       limit: genres.length,
  //     });
  //   }
}
