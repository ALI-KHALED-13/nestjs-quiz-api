import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuestionDto } from "./dtos/question.dto";
import { QuestionService } from "./question.service";
import { QuizService } from "./quiz.service";


@Controller('question')
export class QuestionController {

  constructor (
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService 
  ){}
  
  
  @Post()
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: QuestionDto){
    const quiz = await this.quizService.getQuizById(question.quizId)
    return this.questionService.createNewQ(question, quiz)
  }
}