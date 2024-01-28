import { Body, Controller, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {

  @Post('/login')
  login(@Request() req){
    return req.user;
  }
}
