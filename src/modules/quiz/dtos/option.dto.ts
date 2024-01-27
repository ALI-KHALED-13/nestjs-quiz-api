import { IsNotEmpty, Length } from "class-validator";



export class createOptionDto {
  
  @IsNotEmpty()
  @Length(2, 200)
  text: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean;
}