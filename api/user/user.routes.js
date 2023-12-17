const express = require('express');
const { getUsers, updateUser } = require('./user.controller');
const router = express.Router();

router.get('/', getUsers);
// router.post('/', addUser);
router.put('/:id', updateUser);

module.exports = router;