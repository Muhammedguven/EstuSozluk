import { Answer } from './answer';

export class Entry {
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  category: string | undefined;
  userId: number | undefined;
  date: Date | undefined;
  answers: Answer[] | undefined;

  /*public constructor(id: number, title: string, userId: number, answers: Answer[], description: string, date: Date ) {
    this.id = id;
    this.title = title;
    this.userId = userId;
    this.answers = answers;
    this.description = description;
    this.date = date;
  }*/
}

