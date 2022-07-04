import { makeAutoObservable } from "mobx";
import CompanionStore from './CompanionStore';
import _ from 'lodash';

export default class PlantStore {
  name = '';
  descripion = '';
  companions = [new CompanionStore()];
  pests = [];
  plantingSchedules = [];

  constructor(val) {
    makeAutoObservable(this);
    this.deleteCompanion = this.deleteCompanion.bind(this);
  }

  deleteCompanion = (id) => {
    this.companions = _.remove(this.companions, (c) => c.id !== id)
  }

  addCompanion = () => {
    this.companions.push(new CompanionStore());
  }
}
