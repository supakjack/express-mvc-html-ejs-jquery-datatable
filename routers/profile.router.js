const router = require('express').Router(),
  profileController = require('./../controllers/profile.controller')

router.get('/', profileController.show)
router.get('/:id', profileController.edit)

module.exports = router
