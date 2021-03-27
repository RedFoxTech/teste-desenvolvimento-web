const { isTokenValid } = require("../../../drivers/security/jwt");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provieded' });
  }

  const parts = authHeader.split(' ');

  if (!parts.length === 2) {
    return res.status(401).json({ error: 'Token properties error' });
  }

  const [ scheme, token ] = parts;

  if (!/^Bearer$/.test(scheme)) {
    return res.status(401).json({ error: 'Token malformatted'})
  }

  isTokenValid({ token }, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token invalid' });
    }

    req.userId = decoded.id;
    return next();
  })
}

module.exports = { authMiddleware };