var router = require('express').Router();

const getAllUsers = require('../../controller/getAlluser');

router.route('/users')
.post(getAllUsers.getAll_user)

module.exports = router;