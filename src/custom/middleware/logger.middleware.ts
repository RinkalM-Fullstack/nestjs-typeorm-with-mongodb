import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger(`HTTP`);
    use(req: Request, res: Response, next: NextFunction) {
        this.logger.log(`REQUEST: ${req.method}    PATH: ${req.originalUrl} IP: ${req.ip}  STATUS: ${res.statusCode} `,);
        next();
    }
}

