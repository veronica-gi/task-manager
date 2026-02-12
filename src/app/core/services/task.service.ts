import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

export type TaskStatus = 'pending' | 'in-progress' | 'done';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private storageKey = 'tasks';

  private tasks: Task[] = [];

  private nextId = 1;

  constructor() {
    this.loadFromStorage();
  }

  // Obtener tareas
  getTasks(): Task[] {
    return this.tasks;
  }

  // Añadir tarea
  addTask(title: string) {
    this.tasks.push({
      id: this.nextId++,
      title,
      status: 'pending'
    });

    this.saveToStorage();
  }

  // Actualizar estado
  updateStatus(id: number, status: TaskStatus) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = status;
      this.saveToStorage();
    }
  }

  //  Eliminar tarea
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveToStorage();
  }

  // ---------------------------
  //  Persistencia
  // ---------------------------

  private saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  private loadFromStorage() {
    const stored = localStorage.getItem(this.storageKey);

    if (stored) {
      this.tasks = JSON.parse(stored);

      // Ajustar nextId al mayor id existente + 1
      const maxId = this.tasks.reduce((max, task) => Math.max(max, task.id), 0);
      this.nextId = maxId + 1;
    }
  }
}


