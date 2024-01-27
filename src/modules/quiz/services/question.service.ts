import { InjectRepository } from "@nestjs/typeorm"
import { Question } from "../entities/question.entity"
import { QuestionDto } from "../dtos/question.dto"
import { Injectable } from "@nestjs/common"
import { Quiz } from "../entities/quiz.entity"
import { QuestionRepository } from "../repositories/question.repository"



@Injectable()
export class QuestionService {

  constructor (
    @InjectRepository(Question)
    private questionRespository: QuestionRepository
  ){}

  async findQById (questionId:number){
    return await this.questionRespository.findOne({
      where: {id: questionId},
      relations: ['options']
    })
  }

  async createNewQ (questionDetail:QuestionDto, quiz:Quiz){
    const createdQ = await this.questionRespository.save(questionDetail);

    quiz.questions = (quiz.questions || []).concat(createdQ)

    console.log(quiz.questions)
    await quiz.save()
    return createdQ;
  }
}