export interface Event{
  id: number;
  time: string;
  title: string;
  creator: User;
  guests: User[];
  type: ' BEERS ' | ' COCKTAILS ' | ' COFFEES ' | ' MILKSHAKES ';
  location: EventLocation;
  comments: EventComment[];
}

interface EventComment{
  user: User;
  timestamp: string;
  message: string;
}

interface EventLocation{
  name: string;
  latitude: number;
  longitute: number;
}

interface User{
  name: string;
  avatarUrl: string;
}