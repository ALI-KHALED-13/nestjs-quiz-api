import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { REGEX } from "../configs/user.constants";



export class UserRegsiterDto {

  @IsNotEmpty()
  @Length(2, 50)
  name: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {message: "password is weak"})
  password: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {message: "password is weak"})
  confirm: string;

}