const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {

  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  const error = new ErrorHandler(err.message, err.statusCode);


  //wrong mongodb id error
if(err.name === "CastError"){
  const message = `resource not found. invalid: ${err.path}`;
   err = new ErrorHandler(message,400);
}

//mongodb duplicate key error

if(err.code === 11000){
  const message = `duplicate ${Object.keys(err.keyValue)} entered`
  err = new ErrorHandler(message,400);
}

// Wrong JWT error
if (err.name === "JsonWebTokenError") {
  const message = `Json Web Token is invalid, Try again `;
  err = new ErrorHandler(message, 400);
}

// JWT EXPIRE error
if (err.name === "TokenExpiredError") {
  const message = `Json Web Token is Expired, Try again `;
  err = new ErrorHandler(message, 400);
}

  res.status(error.statusCode).json({
    success: false,
    message: err.message,
  });
  next();
};
