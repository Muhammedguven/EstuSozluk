import { Entry } from './entry';
import { Answer } from "./answer";

export class User {

  id: number | undefined;
  userName: string | undefined;
  email: string | undefined;
  faculty: string | undefined;
  passwordHash: string | undefined;
  passwordSalt: string | undefined;
  entries: Entry[] | undefined;
  answers: Answer[] | undefined;
}
