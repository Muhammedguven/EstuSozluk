import { User } from "./user";

export class Answer {
  id: number | undefined;
  userId: number | undefined;
  entryId: number | undefined;
  description: string | undefined;
  date: Date | undefined;
  user: User = new User();

}
