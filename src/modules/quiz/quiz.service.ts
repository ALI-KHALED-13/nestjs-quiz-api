import { Injectable } from '@nestjs/common';
import { QuizRepository } from './quiz.repository';
import { CreateQuizDto } from './dtos/quiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor (
    @InjectRepository(Quiz)
    private quizRepository: QuizRepository
  ){}

  getAllQuizzes(){
    return [1,2,3]
  }

  async getQuizById(id: number){
    return this.quizRepository.findOne({
     where: {id: id},
     relations: ['questions']
    })
  }

  async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz)
  }
}
