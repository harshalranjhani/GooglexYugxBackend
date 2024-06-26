import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    JwtModule.register({ global: true }),
    MailModule,
    CacheModule.register(),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }