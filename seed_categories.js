if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(async () => {
    console.log("connected to DB");
    await seedCategories();
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });

async function seedCategories() {
  const categories = [
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
    "Lakefront",
  ];

  const listings = await Listing.find({});
  for (let listing of listings) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    listing.category = randomCategory;
    await listing.save();
  }
  console.log("Categories seeded successfully!");
}
