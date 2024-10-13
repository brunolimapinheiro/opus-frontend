import jwt from 'jsonwebtoken';


export const generateToken = (payload: any) => {
  const secret = process.env.JWT_SECRET || '102030';
  return jwt.sign(payload, secret, { expiresIn: '1d' });
};

export const verifyToken = (token: string) => {
  const secret = process.env.JWT_SECRET || '102030';
  return jwt.verify(token, secret);
};

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};