import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../shared/models/wishItem';

/**This component implements the filter system for wishes
 * @property listFilter - The current filter selected
 * @output callback function to be passed in the filter method of wishes array in the parent component
 */

export type FilterValue = '0' | '1' | '2';

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent {
  @Input() filter!: (item: WishItem) => boolean;
  @Output() filterChange = new EventEmitter<(item: WishItem) => boolean>();
  listFilter: FilterValue = '0'; //Initialized to 0 so select field can be marked as All

  /**
   *
   * @param value filter value 0, 1 or 2
   * @returns {void} emits the filter event passing in a callback for the array.filter method
   * in its parent component
   */
  updateFilter(value: FilterValue) {
    if (value === '1') {
      this.filter = (item) => !item.isComplete;
      this.filterChange.emit(this.filter);
    } else if (value === '2') {
      this.filter = (item) => item.isComplete;
      this.filterChange.emit(this.filter);
    } else {
      this.filter = (item) => true;
      this.filterChange.emit(this.filter);
    }
  }
}
