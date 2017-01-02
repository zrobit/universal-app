import {observable, computed, action} from 'mobx';


class MainStore {
  @observable appName = 'Default name'
  @action changeName (text) {
    this.appName = text;
    // body...
  }
}

const mainStore = new MainStore();

export default mainStore;
