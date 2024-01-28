import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from "bcrypt";


@Entity()
export class User extends BaseEntity {
  constructor (obj){
    super()
    Object.assign(this, obj);
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date

  @BeforeInsert()
  async setPassword(password?:string){
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password || this.password, salt);
    this.password = hashedPassword;
  }
}