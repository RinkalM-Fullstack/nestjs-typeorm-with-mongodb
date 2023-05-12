import { Module } from '@nestjs/common';
import { JwtAuthService } from './jwt/jwt.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
  ],
  providers: [JwtAuthService],
  exports: [JwtAuthService]
})
export class CommonModule { }
