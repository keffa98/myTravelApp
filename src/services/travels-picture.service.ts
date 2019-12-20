import {TravelsPictureModels} from "../models/travels-picture.models";
import {Subject} from "rxjs";


export class TravelsPictureService {
  private travelPictureList: TravelsPictureModels[] = [];
  travelPictureList$ = new Subject();

  emitList() {
    this.travelPictureList$.next(this.travelPictureList);
  }

  addtravelPicture(picture: TravelsPictureModels) {
    this.travelPictureList.push(picture);
    this.emitList();
  }
}
