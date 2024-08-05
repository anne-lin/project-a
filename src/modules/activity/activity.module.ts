import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService]
  //providers完整写法
  // providers: [{
  //   provide: "CatsService", //其他模块注入时使用的名称
  //   useClass: CatsService,
  // }],
})
export class ActivityModule {}
