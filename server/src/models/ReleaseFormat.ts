import { Schema, model } from "mongoose";

const releaseFormatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const ReleaseFormat = model('ReleaseFormat', releaseFormatSchema);

export {ReleaseFormat};