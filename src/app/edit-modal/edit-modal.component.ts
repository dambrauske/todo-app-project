import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../services/items.service';
import { log } from 'console';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css',
})
export class EditModalComponent {
  constructor(public itemsService: ItemsService) {}

  closeModal() {
    console.log('close button clicked');
    this.itemsService.changeModalState()
  }

  saveChanges(id: number, input: HTMLInputElement) {
    const inputValue = input.value.trim()
    this.itemsService.updateAndSaveItem(id, inputValue)
    this.closeModal()
  }
}
