import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/models';
import { NgClass } from '@angular/common';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
    constructor(private itemsService: ItemsService) {}

  @Input()
  item!: TodoItem;

  showIcon: boolean = false;

  deleteItem(item: TodoItem) {
    this.itemsService.deleteItem(item.id);  
  }

  completeItem(item: TodoItem) {
    this.itemsService.completeItem(item.id);
  }

  handleModal() {
    this.itemsService.changeModalState()
  }

  editItem(item: TodoItem) {
    this.itemsService.editeThisItem(item)
  }


  handleHoverOnIcon(item: TodoItem) {
    if (!item.completed) {
      return this.showIcon ? 'fas fa-check' : 'hidden';
    } else {
      return 'fas fa-check';
    }
  }

}
