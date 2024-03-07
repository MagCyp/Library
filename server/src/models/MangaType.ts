import { Schema, model } from "mongoose";

const mangaTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const MangaType = model('MangaType', mangaTypeSchema);

export {MangaType};