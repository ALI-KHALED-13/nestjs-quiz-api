import { IsNotEmpty, IsString, Length } from "class-validator";



export class CreateQuizDto {
  
  @IsNotEmpty({message: "can't be empty"})
  @IsString()
  @Length(3, 255)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(3)
  description: string;
}