import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../shared/services/EventService';
import { WishItem } from '../../../shared/models/wishItem';

/**
 * This component displays a single wish item
 * @input {string} - The wish text
 * @input {boolean} - fulfilled state of the wish
 * @output {event} - change event of the fulfilled state
 */

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  constructor(private events: EventService) {}

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  get cssClasses() {
    return {
      'strike-through': this.wish.isComplete,
      'text-muted': this.wish.isComplete,
    };
  }

  removeWish() {
    //there is a global event service
    this.events.emit('removeWish', this.wish);
  }
}

/* TWO WAY BINDING APPROACH */
// export class WishListItemComponent {
//   @Input() wishText!: string;

//   @Input() fulfilled!: boolean;
//   @Output() fulfilledChange = new EventEmitter<boolean>();

//   toggleFulfilled() {
//     this.fulfilled = !this.fulfilled;
//     this.fulfilledChange.emit(this.fulfilled);
//   }

//   get cssClasses() {
//     return {
//       'strike-through': this.fulfilled,
//       'text-muted': this.fulfilled,
//     };
//   }

//   removeWish() {
//     //there is a global event service
//     events.emit('removeWish', this.wishText);
//   }
// }
