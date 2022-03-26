// checks to see if a user is logged in
function requireUser(req, res, next) {
  console.log('req.user: ', req.user)
  if (!req.user) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action",
    });
  }
  next();
}

function requireAdmin(req, res, next) {
  const isAdmin = req.user.isAdmin;
  if (!isAdmin) {
    next({
      name: "AdminAccessError",
      message: "You don't have the right permission to perform this action",
    });
  }
  next();
}

module.exports = {
  requireUser,
  requireAdmin,
};