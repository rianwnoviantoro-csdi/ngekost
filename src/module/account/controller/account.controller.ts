import { Body, Controller, Get } from '@nestjs/common';
import { AccountService } from '../service/account.service';

@Controller('account')
export class AccountController {
    constructor(
        private readonly accountService: AccountService
    ) { }

    @Get()
    async getAllAccount() {
        const result = await this.accountService.findAll()
        
        return { statusCode: 200, message: 'Success.', data: result }
    }
}
