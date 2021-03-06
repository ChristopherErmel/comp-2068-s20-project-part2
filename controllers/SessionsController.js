const User = require('../models/User');
const passport = require('passport');
const viewPath = 'sessions';





exports.new = (req, res) => {
  res.render(`${viewPath}/login`, {
    pageTitle: 'Login'
  });
};

exports.create = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err || !user) return res.status(401).json({
      status: 'failed',
      message: 'Not authorized',
      error: err
    });

    req.login(user, err => {
      if (err) return res.status(401).json({
        status: 'failed',
        message: 'Not authorized',
        error: err
      });

      return res.status(200).json({
        status: 'success',
        message: 'Logged in successfully',
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email
        }
      })
    })
  })(req, res, next);
};


exports.delete = (req, res) => {
  req.logout();
  res.status(200).json({message: 'User was logged out successfully.'});
  res.redirect('/');
};

