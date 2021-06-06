import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Manager Assistant API')
    .setDescription('Manager assistant API documentation from Swagger')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port: number = parseInt(`${process.env.PORT}`) || 3000;
  await app.listen(port);

  console.log('HOST', process.env.HOST);
  console.log('PORT', process.env.PORT);
  console.log('DB', process.env.DB);
  console.log('USER_DB', process.env.USER_DB);
  console.log('PASS_DB', process.env.PASS_DB);
}
bootstrap();
