import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AddTodoComponent } from "./container/add-todo/add-todo.component";
import { TodoListComponent } from './container/todo-list/todo-list.component';
import { TodoItemComponent } from './container/todo-item/todo-item.component';
import { ContainerComponent } from "./container/container.component";
import { EditModalComponent } from "./edit-modal/edit-modal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, AddTodoComponent, TodoListComponent, ContainerComponent, EditModalComponent]
})
export class AppComponent {
  
  
}
