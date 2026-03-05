import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddlware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];

    if (!authHeader || authHeader !== 'Bearer my-sample-token') {
      throw new UnauthorizedException('Acess Denied: Missing token');
    }

    next();
  }
}
