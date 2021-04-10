import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Candidate {
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
    isAvailable: boolean;

    @Column()
    city: string;

    @Column()
    technology: string;

    @Column()
    experience: Date;

    @Column()
    isRemote: boolean;

    @Column()
    photo: string;

    @Column()
    comments: string;

    @Column()
    linkedIn: string;

    @Column()
    noticePeriod: number;
}
