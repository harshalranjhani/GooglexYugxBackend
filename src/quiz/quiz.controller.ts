import { Controller, Get, Post, Body, Param, Delete, UseGuards, UseFilters } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UserInterface } from '../auth/interfaces/user.interface';
import { User } from '../auth/auth.decorator';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from "../auth/guards/auth.guard";
import { AllExceptionsFilter } from '../custom-exception/custom-exception.filter';

@UseFilters(AllExceptionsFilter)
@ApiTags("Quiz")
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) { }

  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    const userId = 1 ; 
    return this.quizService.create(userId, createQuizDto);
  }

  @Get("/question/:topic")
  @ApiParam(
    { name: 'topic', required: true, description: "put a topic" }
  )
  findAllBasedTopics(@Body() topics: { topicName: string }) {
    const topicName = topics.topicName;
    return this.quizService.findAll(topicName);
  }


  @Get()
  async findAll() { 
    return this.quizService.findAll(""); 
  }


  @Get("/topics")
  findTopics() {
    return this.quizService.findTopics();
  }


  // @ApiBearerAuth()
  // @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizService.remove(+id);
  }
}


