const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrillSchema = new Schema({
  image: String,
  name: String,
  description: String,
  grill_racks: Number,
  fuel: String,
  rating: Number,
  features: Array,
  max_avail_hours: Number,
  owner: Object
});

const GrillModel = mongoose.model("grill", GrillSchema);

module.exports = GrillModel;
