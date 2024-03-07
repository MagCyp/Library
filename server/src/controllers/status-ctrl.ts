import { Request } from "express";

import { StatusSrv } from "../services/";
import { CustomResponse } from "../middlewares/respond";
import { objects } from "../utils";

export class StatusCtrl {
  static async getMany(req: Request, res: CustomResponse) {
    const { query, body } = req;
    const ids = body?.ids;
    const options = objects.pick(query, ["limit", "offset", "sort"]);

    const get =
      ids !== undefined
        ? StatusSrv.getManyByIds
        : StatusSrv.getAll;

    const status = await get(ids, options);

    return res.send({
      data: status,
      limit: status.length,
    });
  }
}
