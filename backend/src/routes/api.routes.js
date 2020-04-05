const router = require("express").Router();

const {
  getUsers,
  createUser,
  SignIn,
  logout
} = require("../controllers/api.controller");

// Routes
router.route('/api')
  .get(getUsers)
  .post(createUser)

router.route('/api/login')
  .post(SignIn)

module.exports = router;