import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionService } from "../services/option.service";
import { createOptionDto } from "../dtos/option.dto";



@Controller('question/option')
export class OptionController {

  constructor(
    private readonly optionService:OptionService,
  ){}

  @Get('/:questionId')
  getQuestionOptions(@Param('questionId', ParseIntPipe) questionId:number){
    return this.optionService.getQuestionOptions(questionId)
  }

  @Post('')
  @UsePipes(ValidationPipe)
  saveOptionToQuestion(@Body() optionParams: createOptionDto){
    return this.optionService.createOption(optionParams)
  }
}