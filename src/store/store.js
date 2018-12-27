import { observable, computed, action } from "mobx";

class AppState {
  @observable counter = 0;
  @observable name = "paul";

  @computed get info() {
    return `${this.name} say this counter is ${this.counter}`;
  }

  @action.bound addCounter() {
    this.counter++;
  }
}

export default new AppState();
