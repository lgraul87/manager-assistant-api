import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from 'src/candidates/entities/candidate.entity';
import { Employee } from 'src/employees/entities/employee.entity';

import { User } from 'src/users/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: `mongodb+srv://raulDB:1gradosuperior@cluster0.18yev.mongodb.net/manager-assistant-db`,
            w: 'majority',
            ssl: true,
            authSource: 'admin',
            entities: [User, Candidate, Employee],
            synchronize: true,
        }),
    ],
})
export class MongoModule { }
