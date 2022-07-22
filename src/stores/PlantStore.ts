import { makeAutoObservable } from "mobx";
import CompanionStore from './CompanionStore';
import _ from 'lodash';

export default class PlantStore {
  name: string = '';
  description: string = '';
  companions: CompanionStore[] = [new CompanionStore()];
  pests: [] = [];
  plantingSchedules: [] = [];

  constructor() {
    makeAutoObservable(this);
    this.deleteCompanion = this.deleteCompanion.bind(this);
  }

  deleteCompanion = (id: string) => {
    this.companions = _.remove(this.companions, (c) => c.id !== id)
  }

  addCompanion = () => {
    this.companions.push(new CompanionStore());
  }
}
