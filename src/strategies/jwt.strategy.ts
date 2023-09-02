// jwt.strategy.ts
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AccountService } from 'src/module/account/account.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly accountService: AccountService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'NwQ3RD54udH6TGa0ZY81k4rZSUFDAXrY7hKvmsFR6030v7vP15wUq5EuW3DhRfsW&FYTFy',
    });
  }

  async validate(payload: any) {
    const account = await this.accountService.validateAccount(payload.uuid);
    if (!account) {
      throw new UnauthorizedException('Unauthorized.');
    }

    delete account.password;

    return account;
  }
}