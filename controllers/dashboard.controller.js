module.exports = {
  show: async (req, res, next) => {
    const data = { title: 'Dashboard' }
    res.render('dashboard', data)
  }
}
