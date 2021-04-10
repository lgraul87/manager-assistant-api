import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Candidate } from './entities/candidate.entity';
import { CreateCandidateDto } from './_dtos/create-candidate.dto';
import { UpdateCandidateDto } from './_dtos/update-candidate.dto';

@Injectable()
export class CandidatesService {

  constructor(
    @InjectRepository(Candidate) private candidatesRepository: Repository<Candidate>,
  ) { }

  create(createCandidateDto: CreateCandidateDto) {
    return this.candidatesRepository.save(createCandidateDto);
  }

  findAll() {
    return this.candidatesRepository.find();
  }

  findOne(id: string) {
    return this.candidatesRepository.findOne(id);
  }

  async update(id: string, updateCandidateDto: UpdateCandidateDto) {
    const candidateToUpdate = await this.candidatesRepository.findOne(id);
    candidateToUpdate.name = updateCandidateDto.name ?? candidateToUpdate.name;
    candidateToUpdate.lastName = updateCandidateDto.lastName ?? candidateToUpdate.lastName;
    candidateToUpdate.dni = updateCandidateDto.dni ?? candidateToUpdate.dni;
    candidateToUpdate.email = updateCandidateDto.email ?? candidateToUpdate.email;
    candidateToUpdate.phone = updateCandidateDto.phone ?? candidateToUpdate.phone;
    candidateToUpdate.isAvailable = updateCandidateDto.isAvailable ?? candidateToUpdate.isAvailable;
    candidateToUpdate.city = updateCandidateDto.city ?? candidateToUpdate.city;
    candidateToUpdate.technology = updateCandidateDto.technology ?? candidateToUpdate.technology;
    candidateToUpdate.experience = updateCandidateDto.experience ?? candidateToUpdate.experience;
    candidateToUpdate.isRemote = updateCandidateDto.isRemote ?? candidateToUpdate.isRemote;
    candidateToUpdate.photo = updateCandidateDto.photo ?? candidateToUpdate.photo;
    candidateToUpdate.linkedIn = updateCandidateDto.linkedIn ?? candidateToUpdate.linkedIn;
    candidateToUpdate.comments = updateCandidateDto.comments ?? candidateToUpdate.comments;
    candidateToUpdate.noticePeriod = updateCandidateDto.noticePeriod ?? candidateToUpdate.noticePeriod;
    
    return this.candidatesRepository.save(candidateToUpdate);
  }
  
  remove(id: string) {
    return this.candidatesRepository.delete(id);
  }
}
