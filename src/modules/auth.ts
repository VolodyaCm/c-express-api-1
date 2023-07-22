import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export const createJWT = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET
  );
}

export const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const [, token] = (authHeader || '').split(' ');

  try {
    const user = jwt.verify(token, JWT_SECRET);

    req.user = user;

    next();
  } catch (error) {
    res.status(401);
    res.json({ message: 'Not Authorized' });
    return;
  }
}
