import { Injectable } from '@angular/core';
import { TodoItem } from '../models/models';
import { BehaviorSubject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private allItems = new BehaviorSubject<TodoItem[]>([]);

  addItem(item: string) {
    const currentItems = this.allItems.value

    const newItem: TodoItem = {
      id: Date.now(),
      title: item,
      completed: false,
    };

    this.allItems.next([...currentItems, newItem])

    console.log(this.allItems);
  }

  deleteItem(id: number) {
    const currentItems = this.allItems.value
    const updatedItems = currentItems.filter(item => item.id !== id)
    this.allItems.next(updatedItems)
  }

  completeItem(id: number) {
    const currentItems = this.allItems.value
    const updatedItems = currentItems.map(item => {
      if (item.id === id) {
        return {...item, completed: true}
      }
      return item
    })
    this.allItems.next(updatedItems)
  }

  getActiveItems() {
    return this.allItems.pipe(map((allItems => allItems.filter(item => item.completed === false))))
  }

  getCompletedItems() {
    return this.allItems.pipe(map((allItems => allItems.filter(item => item.completed === true))))
  }

  // handleDeleteToDo(id: number) {
  //   this.allItems = this.allItems.filter((item) => item.id !== id);
  // }

  // handleCompleteToDo(id: number) {
  //   const index = this.allItems.findIndex((item) => item.id === id);
  //   if (index !== -1) {
  //     this.allItems[index].completed = true;
  //   }
  // }

  constructor() { }
}
