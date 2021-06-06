import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from 'src/candidates/entities/candidate.entity';
import { Employee } from 'src/employees/entities/employee.entity';

import { User } from 'src/users/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.HOST}/${process.env.DB}`,
            w: 'majority',
            ssl: true,
            authSource: 'admin',
            entities: [User, Candidate, Employee],
            synchronize: true,
        }),
    ],
})
export class MongoModule { }
