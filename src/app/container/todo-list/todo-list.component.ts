import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem } from '../../models/models';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [TodoItemComponent],
})
export class TodoListComponent {
  @Input()
  activeItems: TodoItem[] = [];

  @Output()
  deleteToDoId: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  completedTodoId: EventEmitter<number> = new EventEmitter<number>()

  handleDeleteToDo(id: number) {
    this.deleteToDoId.emit(id);
  }

  handleCompletedToDo(id: number) {
    this.completedTodoId.emit(id)
  }
}
