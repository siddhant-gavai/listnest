const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;
const { reviewSchema } = require("./review");
const { userSchema } = require("./user.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // category: {
  //   type: String,
  //   enum: [
  //     "Farms",
  //     "Rooms",
  //     "Amazing views",
  //     "Iconic cities",
  //     "Mountains",
  //     "Surfing",
  //     "Amazing pools",
  //     "Beach",
  //     "Cabins",
  //     "OMG!",
  //     "Lakefront",
  //   ],
  //   required: true,
  // },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
