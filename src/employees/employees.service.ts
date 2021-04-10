import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {

  constructor(
    @InjectRepository(Employee) private employeesRepository: Repository<Employee>,

  ) { }

  create(createEmployeeDto: CreateEmployeeDto) {
        return this.employeesRepository.save(createEmployeeDto);
  }

  findAll() {
    return this.employeesRepository.find();
  }

  findOne(id: string) {
    return this.employeesRepository.findOne(id);
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employeeToUpdate = await this.employeesRepository.findOne(id);
    employeeToUpdate.name = updateEmployeeDto.name ?? employeeToUpdate.name;
    employeeToUpdate.lastName = updateEmployeeDto.lastName ?? employeeToUpdate.lastName;
    employeeToUpdate.dni = updateEmployeeDto.lastName ?? employeeToUpdate.lastName;
    employeeToUpdate.email = updateEmployeeDto.email ?? employeeToUpdate.email;
    employeeToUpdate.phone = updateEmployeeDto.phone ?? employeeToUpdate.phone;
    employeeToUpdate.city = updateEmployeeDto.city ?? employeeToUpdate.city;
    employeeToUpdate.technology = updateEmployeeDto.technology ?? employeeToUpdate.technology;
    employeeToUpdate.experience = updateEmployeeDto.experience ?? employeeToUpdate.experience;
    employeeToUpdate.isRemote = updateEmployeeDto.isRemote ?? employeeToUpdate.isRemote;
    employeeToUpdate.salary = updateEmployeeDto.salary ?? employeeToUpdate.salary;
    employeeToUpdate.position = updateEmployeeDto.position ?? employeeToUpdate.position;
    employeeToUpdate.seniority = updateEmployeeDto.seniority ?? employeeToUpdate.seniority;
    employeeToUpdate.ssNumber = updateEmployeeDto.ssNumber ?? employeeToUpdate.ssNumber;
    employeeToUpdate.iban = updateEmployeeDto.iban ?? employeeToUpdate.iban;
    employeeToUpdate.photo = updateEmployeeDto.photo ?? employeeToUpdate.photo;
    employeeToUpdate.comments = updateEmployeeDto.comments ?? employeeToUpdate.comments;
    employeeToUpdate.linkedIn = updateEmployeeDto.linkedIn ?? employeeToUpdate.linkedIn;
    employeeToUpdate.noticePeriod = updateEmployeeDto.noticePeriod ?? employeeToUpdate.noticePeriod;

    return this.employeesRepository.save(employeeToUpdate);
}

  remove(id: string) {
    return this.employeesRepository.delete(id);
  }
}
