import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Abstract } from "./abstract.entity";
import { Landlord } from "./landlord.entity";
import { Tenant } from "./tenant.entity";

@Entity('accounts')
export class Account extends Abstract<Account> {
    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Landlord, (landlord) => landlord.landlordAccount)
    landlord: Landlord

    @OneToOne(() => Tenant, (tenant) => tenant.tenantAccount)
    tenant: Tenant
}