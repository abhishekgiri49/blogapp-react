const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  const parsedToken = token.slice(7);
  if (!token) return res.status(401).json({ message: 'Access denied. Token not provided.' });

  try {
    const decoded = jwt.verify(parsedToken, 'runner');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = { verifyToken };
