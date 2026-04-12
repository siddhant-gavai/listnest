const User = require("../models/user");

module.exports.renderSignUpForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newuser = new User({ email, username });
    const registeredUser = await User.register(newuser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Wanderlust 😍😍");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
  req.flash("success", "Welcome to Wanderlust 😍😍");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you logged out successfully !");
    res.redirect("/listings");
  });
};

module.exports.toggleWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id);
    
    if (!user.wishlist) {
      user.wishlist = [];
    }

    const index = user.wishlist.indexOf(id);
    if (index === -1) {
      user.wishlist.push(id);
      await user.save();
      return res.json({ success: true, liked: true, message: "Added to Wishlist ❤️" });
    } else {
      user.wishlist.splice(index, 1);
      await user.save();
      return res.json({ success: true, liked: false, message: "Removed from Wishlist 💔" });
    }
  } catch (error) {
    console.error("Wishlist error:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
