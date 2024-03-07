import { Schema, model } from "mongoose";

const mangaTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const MangaType = model('mangaType', mangaTypeSchema);

export {MangaType};