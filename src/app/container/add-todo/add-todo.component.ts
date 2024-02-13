import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../../models/models';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
 
  constructor(private itemsService: ItemsService) {}

  addTodo(toDoInput: HTMLInputElement) {
    const item = toDoInput.value.trim();
    if (item) {
      this.itemsService.addItem(item);
      toDoInput.value = ''
    }    
  }
}
