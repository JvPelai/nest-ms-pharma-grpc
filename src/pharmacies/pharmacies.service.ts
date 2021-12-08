import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { Pharmacy } from './entities/pharmacy.entity';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';

@Injectable()
export class PharmaciesService {
  async create(createPharmacyDto: CreatePharmacyDto) {
    const manager = getManager();
    const newPharmacy = manager.create(Pharmacy, createPharmacyDto);
    const result = await manager.save(newPharmacy);
    return result;
  }

  async list() {
    const manager = getManager();
    const pharmacies = await manager.find(Pharmacy);
    return pharmacies;
  }

  findOne(id: number) {
    return `This action returns a #${id} pharmacy`;
  }

  update(id: number, updatePharmacyDto: UpdatePharmacyDto) {
    return `This action updates a #${id} pharmacy`;
  }

  remove(id: number) {
    return `This action removes a #${id} pharmacy`;
  }
}
