import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {
  SwaggerDocumentOptions,
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import * as version from '../version';
import { AppModule } from './app.module';

const { APP_PORT = '3000', APP_HOST = 'localhost' } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });

  const config = new DocumentBuilder()
    .setTitle('Pokedesc')
    .setDescription('API Reference for Pokedesc Project')
    .setVersion(version)
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api_v1', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        strategy: 'excludeAll',
      },
      transform: true,
    }),
  );
  await app.listen(Number(APP_PORT), APP_HOST);
}
bootstrap();
