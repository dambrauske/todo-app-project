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
    this.updateActiveItems();
  }

  handleDeleteToDo(id: number) {
    this.allToDoItems = this.allToDoItems.filter((item) => item.id !== id);
    this.updateActiveItems();
    this.updateCompletedItems();
  }

  handleCompleteToDo(id: number) {
    const index = this.allToDoItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.allToDoItems[index].completed = true;
    }
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
