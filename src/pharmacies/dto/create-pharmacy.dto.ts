import { IsNotEmpty } from 'class-validator';

export class CreatePharmacyDto {
  @IsNotEmpty()
  logo: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cnpj: string;

  @IsNotEmpty()
  adress: string;

  @IsNotEmpty()
  supervisor: string;

  @IsNotEmpty()
  phoneNumber: string;
}
