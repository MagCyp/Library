import { Schema, model, Types } from "mongoose";
import { dates } from "../utils";

const mangaSchema = new Schema({
  name: { type: String, required: true },
  image:{type: String, default:"https://t.ly/xyXhX", required: true },
  rating: { type: Number, default: 0, required: true },
  views: { type: Number, default: 0, required: true },
  mangaType: { type: Types.ObjectId, ref: "MangaType", required: true },
  releaseFormats: [{ type: Types.ObjectId, ref: "ReleaseFormat", required: true }],
  releaseYear: { type: String, required: true },
  uploadedDate: {
    type: Date,
    default: dates.formatDate(),
    required: true,
  },
  titleStatus: { type: Types.ObjectId, ref: "Status", required: true},
  translationStatus: { type: Types.ObjectId, ref: "Status", required: true},
  authors: [{ type: String, ref: "Author", required: false }], //must be true
  artists: [{ type: String, ref: "Artist", required: false }], //must be true
  publishers: [{ type: String, ref: "Publisher", required: false }], //must be true
  uploadedChapters: [{ type: String, ref: "Chapter", required: false }],
  genres: [{ type: Types.ObjectId, ref: "Genre", required: true }],
  alternateTitle: [{ type: String, required: false }],
});

const Manga = model("Manga", mangaSchema);

export { Manga };
