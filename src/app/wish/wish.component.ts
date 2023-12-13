import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from '../../shared/services/EventService';
import { WishesService } from '../../shared/services/wishes.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    CommonModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
})
export class WishComponent implements OnInit, OnDestroy {
  title = 'wishlist';
  items: WishItem[] = [
    // new WishItem('Learn Angular'),
    // new WishItem('Get Cofee', true),
    // new WishItem('Find grass that cuts itself'),
  ];
  wishesSubscription!: Subscription;

  constructor(
    private events: EventService,
    private wishesService: WishesService
  ) {
    //event bus
    this.events.listen('removeWish', (wish: WishItem) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
      console.log(wish);
    });
  }
  ngOnInit(): void {
    this.wishesSubscription = this.wishesService.getWishes().subscribe({
      next: (data: WishItem[]) => {
        this.items = data;
      },
      error: (error: any) => {
        alert(error);
      },
      complete: () => {
        console.log('fetched wishes');
      },
    });
  }
  ngOnDestroy(): void {
    this.wishesSubscription.unsubscribe();
  }

  // filter initially returns true so all items be displayed
  filter = (arg: WishItem) => true;

  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter);
  }

  addNewWish(wish: WishItem) {
    this.items.push(wish);
    console.log(wish);
  }
}
