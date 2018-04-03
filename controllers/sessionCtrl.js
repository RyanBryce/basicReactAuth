module.exports = {
  getSession: function (req, res, next) {
    res.json(req.session.user)
  }
}