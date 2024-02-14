import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem } from '../../models/models';
import { ItemsService } from '../../services/items.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [TodoItemComponent, AsyncPipe],
})
export class TodoListComponent {
  activeItems = this.itemsService.getActiveItems()

  constructor(private itemsService: ItemsService) {
    
  }
}
