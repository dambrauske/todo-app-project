import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItem } from '../models/models';

@Component({
  selector: 'app-container',
  standalone: true,
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  imports: [TodoListComponent, AddTodoComponent],
})
export class ContainerComponent {
  
  allToDoItems: TodoItem[] = [];
  handleNewToDo(newItem: string) {
    const newToDo: TodoItem = {
      id: Date.now(),
      title: newItem,
      completed: false,
    };
    this.allToDoItems.push(newToDo);
    console.log(this.allToDoItems);
  }

}
