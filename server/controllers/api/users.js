const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports = {
  create
};

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    // The token is a string, but yes, we can
    // res.json a string
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    // extra data for the payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}