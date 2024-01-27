import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

interface IOption {
  text: string;
  isCorrect: boolean;
  questionId: number;
}


@Entity('options')
export class Option extends BaseEntity {
  constructor (obj:IOption){
    super();
    Object.assign(this, obj)
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar'})
  text: string;

  @Column({type: 'boolean', default: false})
  isCorrect: boolean;

  @ManyToOne(()=> Question, (question)=> question.options)
  question: Question;
}