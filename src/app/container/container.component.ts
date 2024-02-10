import { Component, Input } from '@angular/core';
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
  activeItems: TodoItem[] = [];
  completedItems: TodoItem[] = [];

  idToDelete!: number;

  handleNewToDo(newItem: string) {
    const newToDo: TodoItem = {
      id: Date.now(),
      title: newItem,
      completed: false,
    };
    this.allToDoItems.push(newToDo);
    console.log(this.allToDoItems);
    this.updateActiveItems();
  }

  handleDeleteToDo(id: number) {
    console.log('handleDeleteToDo from container', id);
    this.allToDoItems = this.allToDoItems.filter((item) => item.id !== id);
    console.log(this.allToDoItems);
    this.updateActiveItems();
    this.updateCompletedItems();
  }

  updateCompletedItems() {
    this.completedItems = this.allToDoItems.filter(
      (item) => item.completed === true
    );
  }

  updateActiveItems() {
    this.activeItems = this.allToDoItems.filter(
      (item) => item.completed === false
    );
  }
}
