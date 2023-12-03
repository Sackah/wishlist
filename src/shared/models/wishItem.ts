/**
 * @class WishItem - Represents a wish item
 * @property {string} wishText - The text of the wish
 * @property {boolean} isComplete - Whether the wish is complete
 *
 * @constructor
 * @param {string} wishText - The text of the wish
 * @param {boolean} isComplete - Whether the wish is complete defaults to [isComplete = false]
 */

export class WishItem {
  public wishText: string;
  public isComplete: boolean;

  constructor(wishText: string, isComplete: boolean = false) {
    this.wishText = wishText;
    this.isComplete = isComplete;
  }
}
