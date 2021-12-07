import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
console.log(__dirname);
const protoPath = './src/proto/pharmacies.proto';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(PharmaciesModule, {
    transport: Transport.GRPC,
    options: {
      package: 'pharmacy',
      protoPath,
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  app.listen();
}
bootstrap();
