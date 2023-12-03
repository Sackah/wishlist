import { Observable, Subject } from 'rxjs';
import { WishItem } from '../models/wishItem';
import { Injectable } from '@angular/core';

interface EventPayload {
  eventName: string;
  payload: WishItem;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private subject = new Subject<EventPayload>();
  //any object that subscribes to the event is going to have
  //an object with these two properties
  emit(eventName: string, payload: WishItem) {
    this.subject.next({ eventName, payload });
  }

  listen(eventName: string, callback: (wish: WishItem) => void) {
    //accepts a callback function that will accept whatever was passed into the ^next method
    this.subject.asObservable().subscribe((nextObj: EventPayload) => {
      if (eventName === nextObj.eventName) {
        callback(nextObj.payload);
      }
    });
  }
}
