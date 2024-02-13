import { Component, Input } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItem } from '../models/models';
import { CompletedListComponent } from './completed-list/completed-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  imports: [TodoListComponent, AddTodoComponent, CompletedListComponent],
})
export class ContainerComponent {
  
}
