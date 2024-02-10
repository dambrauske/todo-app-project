import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../../models/models';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  
  @Output()
  newTodoItem: EventEmitter<string> = new EventEmitter<string>()

  addTodo(newItem: string) {
    this.newTodoItem.emit(newItem)
    console.log(newItem);
  }

}
