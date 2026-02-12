import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../core/services/task.service';
import { Task } from '../../core/models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  newTaskTitle = '';

  constructor(private taskService: TaskService) {}

  // Obtener todas las tareas desde el service
  get tasks(): Task[] {
    return this.taskService.getTasks();
  }

  get pendingTasks(): Task[] {
    return this.tasks.filter(t => t.status === 'pending');
  }

  get inProgressTasks(): Task[] {
    return this.tasks.filter(t => t.status === 'in-progress');
  }

  get doneTasks(): Task[] {
    return this.tasks.filter(t => t.status === 'done');
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    this.taskService.addTask(this.newTaskTitle);
    this.newTaskTitle = '';
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  updateStatus(id: number, status: 'pending' | 'in-progress' | 'done') {
    this.taskService.updateStatus(id, status);
  }

}


