import { InjectRepository } from "@nestjs/typeorm"
import { Question } from "./question.entity"
import { Repository } from "typeorm"
import { QuestionDto } from "./dtos/question.dto"
import { Injectable } from "@nestjs/common"
import { Quiz } from "./quiz.entity"



@Injectable()
export class QuestionService {

  constructor (
    @InjectRepository(Question)
    private questionRespository: Repository<Question>
  ){}

  async createNewQ (questionDetail:QuestionDto, quiz:Quiz){
    const createdQ = await this.questionRespository.save(questionDetail);

    quiz.questions = (quiz.questions || []).concat(createdQ)

    console.log(quiz.questions)
    await quiz.save()
    return createdQ;
  }
}