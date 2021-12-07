import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { PharmaciesService } from './pharmacies.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';

@Controller()
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @GrpcMethod('createPharmacy')
  create(@Payload() createPharmacyDto: CreatePharmacyDto) {
    return this.pharmaciesService.create(createPharmacyDto);
  }

  @GrpcMethod('findAllPharmacies')
  findAll() {
    return this.pharmaciesService.findAll();
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
