import { Body, Controller, Get, Post } from "@nestjs/common";
import { createTaskDto } from "./dto/create-task.dto";
import { Task } from "./tasks.model";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {}
  helloWorld() {
    // this.tasksService.doSomething();
  }
  @Get() getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: createTaskDto): Task {
    // console.log(createTaskDto.title);
    return this.tasksService.createTask(createTaskDto);
  }
}

// @Get('')
