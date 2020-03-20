const router = require("express").Router();

const {
  getUsers,
  createUser,
  SignIn
} = require("../controllers/api.controller");

// Routes
router.route('/api')
  .get(getUsers)
  .post(createUser)

router.route('/api/login')
  .post(SignIn)

module.exports = router;