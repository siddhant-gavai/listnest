const joi = require("joi");

module.exports.listingSchema = joi.object({
  listing: joi
    .object({
      title: joi.string().required(),
      description: joi.string().required(),
      price: joi.number().required().min(0),
      location: joi.string().required(),
      country: joi.string().required(),
      image: joi.string().allow(null, ""),
      category: joi.string().required().valid(
        "Farms",
        "Rooms",
        "Amazing views",
        "Iconic cities",
        "Mountains",
        "Surfing",
        "Amazing pools",
        "Beach",
        "Cabins",
        "OMG!",
        "Lakefront"
      ),
    })
    .required(),
});

module.exports.reviewSchema = joi.object({
  review: joi
    .object({
      rating: joi.number().required().min(1).max(5),
      comment: joi.string().required(),
    })
    .required(),
});
