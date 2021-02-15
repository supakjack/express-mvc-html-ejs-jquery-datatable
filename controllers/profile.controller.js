module.exports = {
  show: async (req, res, next) => {
    const title = 'Profile',
      subTitle = 'A good profile to display your informations'
    res.render('profile', { title, subTitle })
  },
  edit: async (req, res, next) => {
    const title = 'Profile',
      subTitle = 'A good profile to display your informations'
    res.render('profile', { title, subTitle })
  }
}
