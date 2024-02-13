import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/models';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { ItemsService } from '../../services/items.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-completed-list',
  standalone: true,
  templateUrl: './completed-list.component.html',
  styleUrl: './completed-list.component.css',
  imports: [TodoItemComponent, AsyncPipe],
})
export class CompletedListComponent {
  completedItems = this.itemsService.getCompletedItems();

  constructor(private itemsService: ItemsService) {}
}
