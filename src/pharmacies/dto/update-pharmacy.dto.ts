import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreatePharmacyDto } from './create-pharmacy.dto';

export class UpdatePharmacyDto extends PartialType(CreatePharmacyDto) {
  @IsNotEmpty()
  id: number;
}
