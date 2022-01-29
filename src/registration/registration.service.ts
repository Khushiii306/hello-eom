import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration } from './entities/registration.entity';

@Injectable()
export class RegistrationService {

  private regis: Registration[] = [];
  private idr = 1;

  create(createRegistrationDto: CreateRegistrationDto) {
    let rigs = {
      id: this.idr++,
      ...createRegistrationDto
    };
    this.regis.push(rigs);
    return rigs;
  }
  

  findAll() {
    return `This action returns all registration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registration`;
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }

  remove(id: number) {
    return `This action removes a #${id} registration`;
  }
}
