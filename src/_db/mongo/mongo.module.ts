import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from 'src/candidates/entities/candidate.entity';
import { Employee } from 'src/employees/entities/employee.entity';

import { User } from 'src/users/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: process.env.HOST,
            port: 27017,
            database: process.env.DB,
            username: process.env.USER_DB,
            password: process.env.PASS_DB,
            entities: [User, Candidate, Employee],
            synchronize: true,
        }),
    ],
})
export class MongoModule { }
