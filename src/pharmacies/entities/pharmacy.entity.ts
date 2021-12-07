import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pharmacy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logo: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  adress: string;

  @Column()
  supervisor: string;

  @Column()
  phoneNumber: string;
}
