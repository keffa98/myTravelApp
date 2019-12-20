export class TravelsModel {
  billets: string[];
  hotels: string[];
  activity: string[];
  isDone: boolean;
  startDate: any;
  endDate: any

  constructor(public name: string) {
    this.isDone = false;
    this.startDate = '';
    this.endDate = '';
  }
}
