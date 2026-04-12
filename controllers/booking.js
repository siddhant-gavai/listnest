const Booking = require("../models/booking");
const Listing = require("../models/listing");

module.exports.createBooking = async (req, res) => {
  try {
    const { listingId, checkIn, checkOut, totalPrice } = req.body;
    
    const newBooking = new Booking({
      listing: listingId,
      user: req.user._id,
      checkIn,
      checkOut,
      totalPrice,
      status: "booked"
    });

    await newBooking.save();
    
    req.flash("success", "Booking Confirmed! ✅");
    res.json({ success: true, message: "Booking Confirmed! ✅" });
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({ success: false, message: "Booking failed. Please try again." });
  }
};

module.exports.myBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate("listing")
    .sort({ createdAt: -1 });
  res.render("bookings/index", { bookings });
};
