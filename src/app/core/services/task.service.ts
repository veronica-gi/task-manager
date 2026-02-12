import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

export type TaskStatus = 'pending' | 'in-progress' | 'done';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: 1, title: 'Learn Angular', status: 'pending' },
    { id: 2, title: 'Create Task Manager', status: 'in-progress' },
    { id: 3, title: 'Refactor core logic', status: 'done' },
  ];

  private nextId = 4;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    this.tasks.push({
      id: this.nextId++,
      title,
      status: 'pending'
    });
  }

  updateStatus(id: number, status: TaskStatus) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = status;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}

