import { MangaType } from "../models";

export class MangaTypeSrv {
  static async getManyByIds(ids, options) {
    return MangaType.find({ _id: { $in: ids } })
      .limit(options.limit || 10)
      .skip(options.offset)
      .sort(options.sort);
  }

  static async getAll(_, options) {
    return MangaType.find()
      .limit(options.limit || 10)
      .skip(options.offset)
      .sort(options.sort);
  }
}
