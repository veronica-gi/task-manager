import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Create Task Manager', completed: true },
    { id: 3, title: 'Refactor core logic', completed: false },
  ];
}

