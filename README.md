# 🏡 ListNest

ListNest is a professional full-stack web application designed for exploring and booking unique accommodations worldwide—from cozy rooms to rustic farms and luxury villas.  

Built with the **MERN** stack (Mongo, Express, React/EJS, Node), it features a premium UI, robust authentication, and seamless media management.

---

## ✨ Key Features

- 🔐 **Secure Authentication**: User signup, login, and session persistence using Passport.js.
- 🏠 **Full CRUD**: Manage property listings with detailed descriptions, pricing, and category tagging.
- 🔍 **Contextual Search**: Smart search by title, location, or country with real-time feedback.
- 🏷️ **Smart Filters**: Category-based listing discovery with mobile-friendly horizontal scrolling.
- 📸 **Media Management**: High-performance image uploads and transformation via Cloudinary.
- ⭐ **Review System**: Integrated review logic for user feedback and property quality assurance.
- 💳 **Tax Transparency**: One-click tax calculation toggle for transparent pricing.
- 📱 **Premium UI**: Modern, responsive design using Tailwind CSS and custom transitions.
- 🗺️ **Interactive Maps**: (Upcoming) Geo-location visualization for all listings using Leaflet.js.

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Templating:** EJS (EJS-Mate for layouts)
- **Auth:** Passport.js (Local Strategy & Session Branding)
- **Styling:** Tailwind CSS, Bootstrap 5, FontAwesome 6
- **Image Uploads:** Multer + Cloudinary
- **Validations:** Joi (Schema validation for Listings & Reviews)

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- Cloudinary Account (for image management)

### 2. Setup Environment
Create a `.env` file in the `listnest` directory:
```env
# Database Configuration
MONGO_URL=your_mongodb_uri

# Session Configuration
SESSION_SECRET=your_super_secret_code

# Cloudinary Configuration
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```

### 3. Installation
```bash
# Clone the repository
git clone https://github.com/siddhantgavai/Listnest.git

# Navigate to the project directory
cd Listnest/listnest

# Install dependencies
npm install

# Run the development server
node app.js
```

---

## 🗓 Roadmap & Future Enhancements

- [ ] **Leaflet.js Integration**: Interactive maps for property locations.
- [ ] **Booking Management**: Enhanced dashboard for users to manage their stays.
- [ ] **Admin Panel**: Dedicated interface for bulk listing management.
- [ ] **Dark Mode**: Native system-aware dark theme support.
- [ ] **Message System**: Direct messaging between owners and guests.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## ☁️ Cloudinary Configuration
This project uses Cloudinary for storage. Ensure your credentials are correct in the `.env` file to enable image uploads for new listings.
