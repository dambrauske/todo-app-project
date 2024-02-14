import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../services/items.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css',
})
export class EditModalComponent {
  constructor(public itemsService: ItemsService) {}

  closeModal() {
    this.itemsService.selectedItem.next(undefined);
    this.itemsService.changeModalState();
  }

  saveChanges(id: number, input: HTMLInputElement) {
    const inputValue = input.value.trim();
    this.itemsService.updateAndSaveItem(id, inputValue);
    this.closeModal();
  }
}
