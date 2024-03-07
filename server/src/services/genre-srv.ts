import { Genre } from "../models";

export class GenreSrv {
  static async getManyByIds(ids, options) {
    return Genre.find({ _id: { $in: ids } } )
      .limit(options.limit || 10)
      .skip(options.offset)
      .sort(options.sort);
  }

  static async getAll(_, options) {
    return Genre.find()
      .limit(options.limit || 10)
      .skip(options.offset)
      .sort(options.sort);
  }
}
