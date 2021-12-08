import { Controller } from '@nestjs/common';
import { Pharmacy } from './entities/pharmacy.entity';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { PharmaciesService } from './pharmacies.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';

@Controller()
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @GrpcMethod('PharmaciesService', 'Create')
  async create(body: CreatePharmacyDto): Promise<{ response: Pharmacy }> {
    const response = await this.pharmaciesService.create(body);
    return { response };
  }

  @GrpcMethod('PharmaciesService', 'List')
  async list(): Promise<{ pharmacies: Pharmacy[] }> {
    const pharmacies = await this.pharmaciesService.list();
    return { pharmacies };
  }

  @GrpcMethod('findOnePharmacy')
  findOne(@Payload() id: number) {
    return this.pharmaciesService.findOne(id);
  }

  @GrpcMethod('updatePharmacy')
  update(@Payload() updatePharmacyDto: UpdatePharmacyDto) {
    return this.pharmaciesService.update(
      updatePharmacyDto.id,
      updatePharmacyDto,
    );
  }

  @GrpcMethod('removePharmacy')
  remove(@Payload() id: number) {
    return this.pharmaciesService.remove(id);
  }
}
