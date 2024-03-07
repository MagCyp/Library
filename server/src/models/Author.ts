import { Schema, model } from "mongoose";

const authorSchema = new Schema({
  name: { type: String, required: true },
  manga: [{ type: String, ref: "Manga" }],
});

const Author = model("Author", authorSchema);

export {Author};
