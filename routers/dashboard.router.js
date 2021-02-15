const router = require('express').Router(),
  dashboardController = require('./../controllers/dashboard.controller')

router.get('/', dashboardController.show)

module.exports = router
