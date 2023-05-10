import { Module } from '@nestjs/common';
import { JwtAuthService } from './jwt/jwt.service';

@Module({
  providers: [JwtAuthService]
})
export class CommonModule { }
