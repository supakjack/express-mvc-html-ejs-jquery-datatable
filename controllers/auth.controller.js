module.exports = {
  show: async (req, res, next) => {
    const data = { title: 'Login' }
    res.render('login', data)
  },
  login: async (req, res, next) => {
    const data = req.body
    console.log(data);
    res.send(data)
  },
  logout: async (req, res, next) => {
    res.send({ message: 'logout' })
  }
}
