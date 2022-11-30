import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../errors';

export function authenticator(req: Request<any, any, any, any>, res: Response, next: NextFunction) {
  try {
    const username = req.signedCookies?.username;

    if (!username) {
      throw new UnauthorizedError('Please perform login');
    }
    (req as any).username = username;
    return next();
  } catch (err) {
    next(err);
  }
}
