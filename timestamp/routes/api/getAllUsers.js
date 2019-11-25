var router = require('express').Router();

const getAllUsers = require('../../controller/getAlluser');

router.route('/users')
.get(getAllUsers.getAll_user)

module.exports = router;