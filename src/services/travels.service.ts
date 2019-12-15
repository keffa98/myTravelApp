import {TravelsModel} from '../models/travels.model';

export class TravelsService {
  travelList: TravelsModel[] = [
    {
      name: 'London',
      billets:[''],
      hotels: [''],
      activity: [
        'Lorepsum'
      ],
      isDone: false
    },
    {
      billets:[''],
      name: 'Porto',
      hotels: [''],
      activity: [
        'Lorepsum'
      ],
      isDone: false
    },
    {
      name: 'Barcelone',
      billets: [''],
      hotels: [''],
      activity: [
        'Lorepsum'
      ],
      isDone: true
    }
  ];
}
