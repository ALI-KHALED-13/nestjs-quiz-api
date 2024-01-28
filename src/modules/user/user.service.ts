import { Injectable } from '@nestjs/common';
import { UserRegsiterDto } from './dtos/user-regsiter.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository
  ){}
  async cerateUser(userParams:UserRegsiterDto){
    if (userParams.password === userParams.confirm){
      delete userParams.confirm
    }
    const newUser = new User(userParams);
    return await this.userRepository.save(newUser);
  }
}
