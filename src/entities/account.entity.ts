import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Abstract } from "./abstract.entity";

@Entity('accounts')
export class Account extends Abstract<Account> {
    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
}