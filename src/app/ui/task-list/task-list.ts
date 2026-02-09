import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = [
    { id: 1, title: 'Learn Angular', status: 'pending' },
    { id: 2, title: 'Create Task Manager', status: 'in-progress' },
    { id: 3, title: 'Refactor core logic', status: 'done' },
  ];

get pendingTasks() {
  return this.tasks.filter(t => t.status === 'pending');
}

get inProgressTasks() {
  return this.tasks.filter(t => t.status === 'in-progress');
}

get doneTasks() {
  return this.tasks.filter(t => t.status === 'done');
}



newTaskTitle = '';

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    this.tasks.push({
      id: Date.now(),
      title: this.newTaskTitle,
      status: 'pending',
    });

    this.newTaskTitle = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

