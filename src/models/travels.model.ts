export class TravelsModel {
  billets: string[];
  hotels: string[];
  activity: string[];
  isDone: boolean;

  constructor(public name: string) {
    this.isDone = false;
  }
}
