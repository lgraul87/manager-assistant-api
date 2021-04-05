import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    lastName: string;
}
