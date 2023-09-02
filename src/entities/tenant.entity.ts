import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Abstract } from "./abstract.entity";
import { Account } from "./account.entity";

@Entity('tenants')
export class Tenant extends Abstract<Tenant> {
    @OneToOne(() => Account, (account) => account.tenant)
    @JoinColumn({ name: 'tenant_account' })
    tenantAccount: Account;
}