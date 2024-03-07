import { fields } from "../constants";
import { Manga } from "../models";
import { objects } from "../utils";

export class MangaSrv {
  static async getMany(query, options) {
    return Manga.find(query)
      .populate([
        { path: "releaseFormats", model: "ReleaseFormat", select: "name" },
        { path: "titleStatus", model: "Status", select: "label" },
        { path: "translationStatus", model: "Status", select: "label" },
        { path: "genres", model: "Genre", select: "name" },
        { path: "mangaType", model: "MangaType", select: "name" },
      ])
      .limit(+options.limit || 10)
      .skip(+options.offset)
      .sort(options.sort);
  }

  static async getOne(query) {
    return Manga.findOne(query).populate([
      { path: "releaseFormats", model: "ReleaseFormat", select: "name" },
      { path: "titleStatus", model: "Status", select: "label" },
      { path: "translationStatus", model: "Status", select: "label" },
      { path: "genres", model: "Genre", select: "name" },
    ]);
  }

  static async createOne(body) {
    return Manga.create(body);
  }

  static async createMany(body) {
    return Manga.insertMany(body);
  }

  static async updateOne(_id, body) {
    const newData = objects.pick(body, fields.manga);

    return Manga.findOneAndUpdate({ _id }, newData, {
      useFindAndModify: false,
      new: true,
    });
  }

  static async updateMany(body) {
    const newData = objects.pick(body.updatingFields, fields.manga);

    const { modifiedCount } = await Manga.updateMany(body.filter, newData);

    return modifiedCount > 0;
  }

  static async deleteOne(_id) {
    return Manga.findByIdAndDelete(_id);
  }

  static async deleteMany(ids) {
    const { deletedCount } = await Manga.deleteMany({ _id: { $in: ids } });

    return deletedCount > 0;
  }
}
