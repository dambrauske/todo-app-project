import { Injectable } from '@angular/core';
import { TodoItem } from '../models/models';
import { BehaviorSubject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private allItems = new BehaviorSubject<TodoItem[]>([]);
  editModalOpen = new BehaviorSubject<boolean>(false);
  editedItem = new BehaviorSubject<TodoItem | undefined>(undefined);

  addItem(item: string) {
    const currentItems = this.allItems.value;

    const newItem: TodoItem = {
      id: Date.now(),
      title: item,
      completed: false,
    };

    this.allItems.next([...currentItems, newItem]);
  }

  deleteItem(id: number) {
    const currentItems = this.allItems.value;
    const updatedItems = currentItems.filter((item) => item.id !== id);
    this.allItems.next(updatedItems);
  }

  completeItem(id: number) {
    const currentItems = this.allItems.value;
    const updatedItems = currentItems.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true };
      }
      return item;
    });
    this.allItems.next(updatedItems);
  }

  changeModalState() {
    const currentState = this.editModalOpen.next(!this.editModalOpen.value);
    console.log(this.editModalOpen.value);
  }

  editeThisItem(item: TodoItem) {
    this.editedItem.next(item);
  }

  updateAndSaveItem(id: number, newTitle: string) {
    console.log('newTitle', newTitle);
    
    const currentItems = this.allItems.value
    const updatedItems = currentItems.map((item) => {
      if (item.id === id) {
        return {...item, title: newTitle}
      }
      return item
    })
    this.allItems.next(updatedItems)
  }

  getActiveItems() {
    return this.allItems.pipe(
      map((allItems) => allItems.filter((item) => item.completed === false))
    );
  }

  getCompletedItems() {
    return this.allItems.pipe(
      map((allItems) => allItems.filter((item) => item.completed === true))
    );
  }
}
