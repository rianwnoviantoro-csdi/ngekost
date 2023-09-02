import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

import { Account } from 'src/entities/account.entity';
import { LoginRequest, RegisterRequest } from './register.request';
import { v4 } from 'uuid';
import { LoginResponse } from './account.response';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
    private readonly jwtService: JwtService,
  ) { }

  async findAll(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  async findOneByEmail(email: string): Promise<Account> {
    const existAccount = await this.accountRepository.findOne({ where: { email } })

    if (!existAccount) throw new NotFoundException('Account not found.')

    return existAccount
  }

  async register(body: RegisterRequest): Promise<Account> {
    const existAccount = await this.accountRepository.findOne({ where: { email: body.email } })

    if (existAccount) { 
      console.log(existAccount)
      throw new BadRequestException('Bad request.')
    }

    const accountInstance = new Account({
      uuid: v4(),
      ...body,
      password: await bcrypt.hash(body.password, 10),
    });

    const success = await this.accountRepository.save(accountInstance);

    if (!success) { 
      console.log(success)
      throw new BadRequestException('Bad request.')
    };

    delete success.password;

    return success;

  }

  async login(body: LoginRequest): Promise<LoginResponse> {
    const existAccount = await this.findOneByEmail(body.email);

    if (!existAccount.is_active) throw new UnauthorizedException(`Account is'nt active.`)

    const validPassword = await bcrypt.compare(body.password, existAccount.password);

    if (!validPassword) throw new BadRequestException(`Bad credentials.`)

    const token = this.jwtService.sign({ uuid: existAccount.uuid, name: existAccount.name });

    return { token: token };
  }

  async validateAccount(uuid: string): Promise<Account> {
    return await this.accountRepository.findOne({ where: { uuid } });
  }
}
