import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../../shared/models/wishItem';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

/**
 * A component that renders a list of wishes
 *
 * This component renders a list of checkbox elements each representing a wish, the check box
 * the state of completion
 * @property {Array} WishItem - list of wish items, each wish has a wishText attribute and isComplete state
 */

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes!: WishItem[];

  /**
   * This function toggles the isCompleted state of a wish
   * @param event a mouse click on the checkbox element
   * @param wish the current wish being clicked
   */
  toggleItem(event: MouseEvent, wish: WishItem) {
    wish.isComplete = !wish.isComplete;
  }
}
