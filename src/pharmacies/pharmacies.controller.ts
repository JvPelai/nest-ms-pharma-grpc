import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PharmaciesService } from './pharmacies.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';

@Controller()
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @MessagePattern('createPharmacy')
  create(@Payload() createPharmacyDto: CreatePharmacyDto) {
    return this.pharmaciesService.create(createPharmacyDto);
  }

  @MessagePattern('findAllPharmacies')
  findAll() {
    return this.pharmaciesService.findAll();
  }

  @MessagePattern('findOnePharmacy')
  findOne(@Payload() id: number) {
    return this.pharmaciesService.findOne(id);
  }

  @MessagePattern('updatePharmacy')
  update(@Payload() updatePharmacyDto: UpdatePharmacyDto) {
    return this.pharmaciesService.update(
      updatePharmacyDto.id,
      updatePharmacyDto,
    );
  }

  @MessagePattern('removePharmacy')
  remove(@Payload() id: number) {
    return this.pharmaciesService.remove(id);
  }
}
