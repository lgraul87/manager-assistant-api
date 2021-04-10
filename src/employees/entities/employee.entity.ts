import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Employee {
    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    lastName: string;
   
    @Column()
    dni: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    city: string;

    @Column()
    technology: string;

    @Column()
    experience: Date;

    @Column()
    isRemote: boolean;

    @Column()
    salary: number;

    @Column()
    position: string;

    @Column()
    seniority: Date;

    @Column()
    ssNumber: string;

    @Column()
    iban: string;

    @Column()
    linkedIn: string;

    @Column()
    noticePeriod: number;

    @Column()
    comments: string;

    @Column()
    photo: string;

}
