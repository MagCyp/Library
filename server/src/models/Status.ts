import { Schema, model } from "mongoose";

const statusSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
});

const Status = model('Status', statusSchema);

export {Status};