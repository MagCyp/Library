import { Schema, model } from "mongoose";

const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Genre = model('Genre', genreSchema);

export {Genre};