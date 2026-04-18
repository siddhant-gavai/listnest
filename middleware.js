const Listing = require("./models/listing");
const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/expressError.js");
const Review = require("./models/review.js");

/**
 * Middleware to check if a user is authenticated.
 * If not authenticated, saves the original URL for redirection and redirects to login.
 */
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // Save the requested URL to redirect back after login
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to perform this action!");
    return res.redirect("/login");
  }
  next();
};

/**
 * Middleware to transfer the redirect URL from session to res.locals.
 * This is used because passport clears the session upon login.
 */
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

/**
 * Middleware to verify if the current user is the owner of a listing.
 * Prevents unauthorized users from editing or deleting listings.
 */
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }
  if (!listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "You do not have permission to perform this operation.");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

/**
 * Middleware to validate listing data against a predetermined Joi schema.
 * Throws an ExpressError if validation fails.
 */
module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

/**
 * Middleware to validate review data against a predetermined Joi schema.
 * Throws an ExpressError if validation fails.
 */
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

/**
 * Middleware to verify if the current user is the author of a specific review.
 * Prevents unauthorized users from deleting reviews they didn't write.
 */
module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);

  if (!review) {
    req.flash("error", "Review not found!");
    return res.redirect(`/listings/${id}`);
  }

  if (
    !review.author ||
    !res.locals.currUser ||
    !review.author.equals(res.locals.currUser._id)
  ) {
    req.flash("error", "You are not the author of this review!");
    return res.redirect(`/listings/${id}`);
  }

  next();
};
