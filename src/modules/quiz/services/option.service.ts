import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OptionRepository } from "../repositories/option.repository";
import { QuestionService } from "./question.service";
import { createOptionDto } from "../dtos/option.dto";
import { Option } from "../entities/option.entity";



@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private optionRepository:OptionRepository,
    private readonly questionService: QuestionService
  ){}


  async getQuestionOptions (questionId:number){
    const question = await this.questionService.findQById(questionId);
    return await this.optionRepository.findBy({question})
  }


  async createOption(optionParams: createOptionDto){
    const question = await this.questionService.findQById(optionParams.questionId);
    
    let newOption = new Option(optionParams)
    newOption = await this.optionRepository.save(newOption);
    question.options.push(newOption);
    await question.save();

    return newOption
  }
}