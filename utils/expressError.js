class ExpressError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message || "Something went wrong";
  }
}

module.exports = ExpressError;
