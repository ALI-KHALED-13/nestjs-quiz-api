import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dtos/quiz.dto';

@Controller('quiz')
export class QuizController {

  constructor(private readonly quizService:QuizService){}

  @Get('/')
  getAllQuizzes(){
    return this.quizService.getAllQuizzes();
  }

  @Get('/:id')
  async getOneQuiz(@Param('id', ParseIntPipe) id: number){
    return this.quizService.getQuizById(id)
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async cerateQuiz(@Body() quizData:CreateQuizDto){
    return this.quizService.createNewQuiz(quizData);
  }
}
