import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5454,
      username: 'postgres',
      password: 'myPostgres13',
      database: 'quiz',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
