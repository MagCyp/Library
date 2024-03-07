import { Request } from "express";

import { ReleaseFormatSrv } from "../services/";
import { CustomResponse } from "../middlewares/respond";
import { objects } from "../utils";

export class ReleaseFormatCtrl {
  static async getMany(req: Request, res: CustomResponse) {
    const { query, body } = req;
    const ids = body?.ids;
    const options = objects.pick(query, ["limit", "offset", "sort"]);

    const get =
      ids !== undefined
        ? ReleaseFormatSrv.getManyByIds
        : ReleaseFormatSrv.getAll;

    const releaseFormat = await get(ids, options);

    return res.send({
      data: releaseFormat,
      limit: releaseFormat.length,
    });
  }
}
