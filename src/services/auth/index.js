const { get } = require('lodash');

const { UnauthorizedHttpException } = require('../../common/errors');

const checkAuth = (req, res, next) => {
  const userId = get(req, 'session.userId', null);
  if (!userId) {
    return next(new UnauthorizedHttpException('Not authorized: only authorized users can send messages'));
  }

  return next();
};

module.exports = {
  checkAuth,
};
