import { User } from './user';
import { EventLocation } from './eventlocation';
import { EventComment } from './eventcomment';

export class Event{
  id: number;
  time: string;
  title: string;
  creator: User;
  guests: User[];
  type: ' BEERS ' | ' COCKTAILS ' | ' COFFEES ' | ' MILKSHAKES ';
  location: EventLocation;
  comments: EventComment[];
}
