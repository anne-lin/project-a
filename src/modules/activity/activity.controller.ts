import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Header, Redirect, Optional, Inject} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Res } from ""

@Controller(['activity1','activity2'])
@Controller('activity')
export class ActivityController {
  constructor(
    private readonly activityService: ActivityService,
    @Optional()  //可选的
    @Inject('HTTP_OPTIONS') 
    private httpClient: T,
  ) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.create(createActivityDto);
  }

  @Get()
  findAll() {
    return this.activityService.findAll();
  }

  @Get(':id')
  @Redirect('https://nestjs.com', 301) //重定向
  findOne(@Param('id') id: string) {
    return this.activityService.findOne(+id);

    //return 此key动态设置重定向的url和code
    return {
      "url": "string", 
      "statusCode": "number"
    }
  }

  @HttpCode(201) //更改响应状态码
  @Header('Cache-Control', 'none') //设置响应的头部信息
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activityService.update(+id, updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityService.remove(+id);
  }

  //Nest会检测处理程序是否使用了@Res()或@Next()，这表示你选择了特定于库的选项。如果同时使用了两种方法，标准方法将在此单个路由上自动禁用，并且不再按预期工作。要同时使用两种方法（例如，只注入响应对象以设置cookie/标头，但仍将其余部分留给框架），你必须在@Res({ passthrough: true })装饰器中将passthrough选项设置为true。


  //使用express写法注意，具有再详细看教程
  @Get()
  findAll2(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
  }
}
