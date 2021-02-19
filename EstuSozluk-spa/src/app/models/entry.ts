import { Answer } from './answer';
import { User } from './user';

export class Entry {
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  category: string | undefined;
  userId: number | undefined;
  date: Date | undefined;
  answers: Answer[] | undefined;
  user: User = new User();
}

