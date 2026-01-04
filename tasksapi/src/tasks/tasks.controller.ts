import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }
  @Get()
  findAll() {
    return 'This action returns all tasks';
  }
  @Get(':id')
  findOne() {
    return 'This action returns one task';
  }
  @Post()
  create() {
    return 'This action adds a new task';
  }
  @Put(':id')
  update() {
    return 'This action updates a task';
  }
  @Delete(':id')
  delete() {
    return 'This action deletes a task';
  }
}
