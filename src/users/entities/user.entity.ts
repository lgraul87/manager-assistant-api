import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { UserMode } from '../enums/user-mode.enum';
import { UserRole } from '../enums/user-role.enum';

@Entity()
export class User {
    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    photoProfile: string;

    @Column()
    role: UserRole;

    @Column()
    mode: UserMode;
}
