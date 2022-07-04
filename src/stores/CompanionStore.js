import { makeAutoObservable } from "mobx";
import { v4 as uuid } from 'uuid';

export default class CompanionStore {
  id = uuid();
  plant = null;
  descripion = '';

  constructor(val) {
    makeAutoObservable(this);
  }
}
