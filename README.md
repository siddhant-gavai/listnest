# 🏡 ListNest

ListNest is a professional full-stack web application designed for exploring and booking unique accommodations worldwide—from cozy rooms to rustic farms and luxury villas.  

Built with the **MERN** stack (Mongo, Express, React/EJS, Node), it features a premium UI, robust authentication, and seamless media management.

---

## ✨ Key Features

- 🔐 **Secure Authentication**: User signup, login, and session persistence using Passport.js.
- 🏠 **Full CRUD**: Manage property listings with detailed descriptions, pricing, and category tagging.
- 🔍 **Advanced Search**: Context-aware search by location, title, or country with dynamic UI feedback.
- 🏷️ **Smart Filters**: Category-based listing discovery with smooth, mobile-responsive horizontal scrolling.
- 📸 **Media Management**: High-performance image uploads and transformation via Cloudinary.
- ⭐ **Reviews & Ratings**: Integrated review system for user feedback and property quality assurance.
- 💳 **Tax Transparency**: Real-time tax calculation toggle for transparent pricing.
- 📱 **Premium UI**: Modern, responsive design using Tailwind CSS and custom transitions.

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Templating:** EJS (EJS-Mate for layouts)
- **Auth:** Passport.js (Local Strategy)
- **Styling:** Tailwind CSS, Bootstrap 5, FontAwesome
- **Image Uploads:** Multer + Cloudinary
- **Maps:** Leaflet.js (for property locations)

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v16+)
- MongoDB (Local or Atlas)
- Cloudinary Account

### 2. Setup Environment
Create a `.env` file in the `listnest` directory:
```env
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```

### 3. Installation
```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd Listnest/listnest

# Install dependencies
npm install

# Run the application
node app.js
```

---

## ☁️ Cloudinary Configuration
This project uses Cloudinary for storage. Ensure your credentials are correct in the `.env` file to enable image uploads for new listings.
