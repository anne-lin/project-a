import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    { 
      abortOnError: false  //程序异常抛出错误而不是退出
    }
  );


  /**
   * 
  期望其底层由Express实现，并且想访问express的底层api时使用
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
   */
  
  /**
   * 
  期望其底层由Fastify实现，并且想访问Fastify的底层api时使用
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);
   */

  await app.listen(3000);
}
bootstrap();
