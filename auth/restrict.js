const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET || "PRIVATE", ());
  } else {
    res.status(400).json({ message: "No Authorization token provided" });
  }

};
