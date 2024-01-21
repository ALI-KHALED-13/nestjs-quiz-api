import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity('quizzes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'quiz unique id'
  })
  id: number


  @Column({
    type: 'text'
  })
  title: string;


  @Column({
    type: 'text'
  })
  description: string;


  @Column({
    default: true
  })
  isActive: boolean;

  @OneToMany(()=> Question, (question)=> question.quiz)
  questions: Question[]
}

