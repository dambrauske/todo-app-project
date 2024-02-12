import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/models';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-completed-list',
  standalone: true,
  templateUrl: './completed-list.component.html',
  styleUrl: './completed-list.component.css',
  imports: [TodoItemComponent],
})
export class CompletedListComponent {
  @Input()
  completedToDoItems?: TodoItem[];

  @Output()
  deleteCompletedToDoId: EventEmitter<number> = new EventEmitter<number>();

  handleDeleteCompletedToDo(id: number) {
    console.log('handleDeleteToDo from completed', id);
    this.deleteCompletedToDoId.emit(id);
  }
}
