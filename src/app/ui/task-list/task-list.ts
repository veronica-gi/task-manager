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
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Create Task Manager', completed: true },
    { id: 3, title: 'Refactor core logic', completed: false },
  ];

newTaskTitle = '';

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    this.tasks.push({
      id: Date.now(),
      title: this.newTaskTitle,
      completed: false,
    });

    this.newTaskTitle = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

