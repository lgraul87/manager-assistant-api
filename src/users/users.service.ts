import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }

    create(createUserDto: CreateUserDto) {
        return this.usersRepository.save(createUserDto);
    }

    findAll() {
        return this.usersRepository.find();
    }

    findOne(id: string) {
        return this.usersRepository.findOne(id);
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const userToUpdate = await this.usersRepository.findOne(id);
        userToUpdate.name = updateUserDto.name ?? userToUpdate.name;
        userToUpdate.lastName = updateUserDto.lastName ?? userToUpdate.lastName;
        return this.usersRepository.save(userToUpdate);
    }

    delete(id: string) {
        return this.usersRepository.delete(id);
    }
}
