import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './_db/mongo/mongo.module';
import { UsersModule } from './users/users.module';
import { CandidatesModule } from './candidates/candidates.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [MongoModule, UsersModule, CandidatesModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
