import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../shared/models/wishItem';
import { WishesService } from '../../../shared/services/wishes.service';

/**
 * Form component to add a new wish
 * @output addWish - a new wish to be added to an list of WishItems
 */

@Component({
  selector: 'app-add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText = '';

  constructor(private http: WishesService) {}

  addNewWish(event: SubmitEvent) {
    event.preventDefault();
    const id = Math.floor(Math.random() * 30);

    // this.addWish.emit(new WishItem(this.newWishText));
    // this.newWishText = '';

    this.http
      .addWish({
        wishText: this.newWishText,
        isComplete: false,
        id: id,
      })
      .subscribe({
        error: (error: any) => {
          alert(error);
        },
      });
    this.newWishText = '';
  }
}
