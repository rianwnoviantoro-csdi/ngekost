import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Abstract } from "./abstract.entity";
import { Landlord } from "./landlord.entity";

@Entity('accounts')
export class Account extends Abstract<Account> {
    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Landlord, (landlord) => landlord.account)
    own: Landlord
}