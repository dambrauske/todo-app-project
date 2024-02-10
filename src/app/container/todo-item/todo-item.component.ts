import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/models';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
  item!: TodoItem;

  @Output()
  idToDelete!: number;

  @Output()
  deleteTodoId: EventEmitter<number> = new EventEmitter<number>()

  sendItemToDelete(item: TodoItem) {
    console.log(item);
    this.idToDelete = item.id
    this.deleteTodoId.emit(this.idToDelete)
    console.log(this.idToDelete);
  }

}
