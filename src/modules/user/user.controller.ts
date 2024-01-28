import { Body, Controller, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegsiterDto } from './dtos/user-regsiter.dto';

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService
  ){}


  @Post('/register')
  register(
    @Body(new ValidationPipe({errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY}))
    userParams: UserRegsiterDto
  ){
    return this.userService.cerateUser(userParams)
  }
}
