import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Abstract } from "./abstract.entity";
import { Account } from "./account.entity";

@Entity('landlords')
export class Landlord extends Abstract<Landlord> {
    @OneToOne(() => Account, (account) => account.own)
    @JoinColumn({ name: 'account' })
    account: Account;
}