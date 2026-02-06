import { Component } from '@angular/core';
import { TaskList } from './ui/task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,   // Marca este componente como standalone
  imports: [TaskList], // Importa TaskList para poder usarlo en el template
  template: `
    <main style="padding: 2rem; font-family: sans-serif;">
      <h1>Mi Task Manager</h1>
      <app-task-list></app-task-list>  <!-- Aquí se renderiza la lista de tareas -->
    </main>
  `,
})
export class App {}

