const jwt = require("jsonwebtoken");

function generateToken(user) {
  const payload = {
    username: user.name,
    id: user.id
  };
  const options = {
    expiresIn: "1d"
  };
}
