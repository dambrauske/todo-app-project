import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/models';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input()
  item!: TodoItem;

  @Output()
  idToDelete!: number;

  @Output()
  idToCompleted!: number;

  @Output()
  deleteTodoId: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  completedTodoId: EventEmitter<number> = new EventEmitter<number>();

  sendItemToDelete(item: TodoItem) {
    this.idToDelete = item.id;
    this.deleteTodoId.emit(this.idToDelete);
  }

  sentItemToCompleted(item: TodoItem) {
    this.idToCompleted = item.id;
    this.completedTodoId.emit(this.idToCompleted)
  }
}
