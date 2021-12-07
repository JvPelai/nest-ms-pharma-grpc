import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PharmaciesModule } from './pharmacies/pharmacies.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PharmaciesModule,
    {
      transport: Transport.TCP,
    },
  );
  app.listen();
}
bootstrap();
