const router = require('express').Router(),
  authController = require('./../controllers/auth.controller')

router.get('/', authController.show)
router.post('/login', authController.login)
router.post('/logout', authController.logout)

module.exports = router
