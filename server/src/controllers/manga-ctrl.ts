import { Request } from "express";

import { MangaSrv } from "../services/";
import { CustomResponse } from "../middlewares/respond";
import { objects } from "../utils";
import { fields } from "../constants";

export class MangaCtrl {
  static async getMany(req: Request, res: CustomResponse) {
    const { query } = req;
    const findCriteria = objects.pick(query, fields.manga);
    const options = objects.pick(query, ["limit", "offset", "sort"]);

    const mangas = await MangaSrv.getMany(findCriteria, options);

    return res.send({
      data: mangas,
      limit: mangas.length,
    });
  }

  static async getOne(req: Request, res: CustomResponse) {
    const user = await MangaSrv.getOne({ _id: req.params._id });

    return res.send({
      data: user,
    });
  }

  static async post(req: Request, res: CustomResponse) {
    const { body } = req;
    const create = Array.isArray(body)
      ? MangaSrv.createMany
      : MangaSrv.createOne;

    const data = await create(body);

    return res.created({
      data,
    });
  }

  static async putOne(req: Request, res: CustomResponse) {
    const manga = await MangaSrv.updateOne(req.params._id, req.body);

    return manga
      ? res.accepted({ data: manga })
      : res.notFound({ errors: [{ message: "resource not found" }] });
  }

  static async putMany(req: Request, res: CustomResponse) {
    const isModified = await MangaSrv.updateMany(req.body);

    return isModified
      ? res.accepted({
          data: { message: `updated manga by ${Object.keys(req.body.filter)}` },
        })
      : res.notFound({ errors: [{ message: "resource not found" }] });
  }

  static async removeOne(req: Request, res: CustomResponse) {
    const isDeleted = await MangaSrv.deleteOne({ _id: req.params._id });

    return isDeleted
      ? res.noContent()
      : res.notFound({ errors: [{ message: "resource not found" }] });
  }

  static async removeMany(req: Request, res: CustomResponse) {
    const isDeleted = await MangaSrv.deleteMany(req.body.ids);

    return isDeleted
      ? res.noContent()
      : res.notFound({ errors: [{ message: "resource not found" }] });
  }
}
