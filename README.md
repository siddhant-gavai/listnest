# 🏡 ListNest

ListNest is a full-stack web application to create, view, and manage property or room listings — inspired by Airbnb.  
Built with **Node.js**, **Express**, **MongoDB**, and **EJS**, it supports user authentication, reviews, image uploads, and complete CRUD operations.

---

## ✨ Features

- 🔐 User Authentication (Login, Signup)
- 🏠 Create, Edit, and Delete Listings
- 📸 Upload Images (via Cloudinary)
- ⭐ Leave Reviews with Ratings & Comments
- 👮 Access Control (isLoggedIn, isOwner, isReviewAuthor)
- 💬 Flash Messages & Form Validation
- 🎨 Clean UI using Bootstrap 5

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Templating:** EJS
- **Auth:** Passport.js
- **Styling:** Bootstrap 5
- **Image Uploads:** Multer + Cloudinary
- **Utils:** connect-flash, method-override

---

## ☁️ Cloudinary Setup

This project uses [Cloudinary](https://cloudinary.com) to store uploaded images.

### 🔐 .env Configuration

Create a `.env` file in the root directory and add:
