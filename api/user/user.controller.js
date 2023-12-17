const userService = require('./user.service.js');
const logger = require('../../services/logger.service');

// GET LIST
async function getUsers(req, res) {
  try {
    const users = await userService.query();
    res.json(users);
  } catch (err) {
    const errMsg = 'Failed to get users';
    logger.error(errMsg, err);
    res.status(500).send({ err: errMsg });
  }
}

// POST (add user)
// async function addUser(req, res) {
//   try {
//     const user = req.body;
//     const addedUser = await userService.add(user);
//     res.json(addedUser);
//   } catch (err) {
//     const errMsg = 'Failed to add user';
//     logger.error(errMsg, err);
//     res.status(500).send({ err: errMsg })
//   }
// }

// PUT (UPDATE user)
async function updateUser(req, res) {
  try {
    const user = req.body;
    const updatedUser = await userService.update(user);
    res.json(updatedUser);
  } catch (err) {
    const errMsg = 'Failed to update user';
    logger.error(errMsg, err);
    res.status(500).send({ err: errMsg })
  }
}

module.exports = {
  getUsers,
  // addUser,
  updateUser
}