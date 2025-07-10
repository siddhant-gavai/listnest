const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "listnest_DEV",
    allowed_formats: ["png", "jpeg", "jpg"], // ✅ fixed typo
    transformation: [
      { width: 800, height: 600, crop: "limit", quality: "auto" }, // ✅ image compression
    ],
  },
});

module.exports = {
  cloudinary,
  storage,
};
