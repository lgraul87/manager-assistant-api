import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from 'src/candidates/entities/candidate.entity';
import { Employee } from 'src/employees/entities/employee.entity';

import { User } from 'src/users/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: process.env.HOST || 'localhost',
            port: 27017,
            database: process.env.USER_DB || 'manager-assistant-db-test',
            password: process.env.PASS_DB || '',
            entities: [User, Candidate, Employee],
            synchronize: true,
        }),
    ],
})
export class MongoModule { }
