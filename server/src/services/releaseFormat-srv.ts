import { ReleaseFormat } from "../models";

export class ReleaseFormatSrv {
  static async getManyByIds(ids, options) {
    return ReleaseFormat.find({ _id: { $in: ids } })
      .limit(options.limit || 10)
      .skip(options.offset)
      .sort(options.sort);
  }

  static async getAll(_, options) {
    return ReleaseFormat.find()
      .limit(options.limit || 10)
      .skip(options.offset)
      .sort(options.sort);
  }
}
