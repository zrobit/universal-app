import {observable, computed, action} from 'mobx';

class SearchStore {
  @observable query = 'hola default'
  @observable results = []
  @action queryUpdate (query) {
    this.query = query;
  }
  @action resultsUpdate (results) {
    this.results = results;
  }
}

const searchStore = new SearchStore();

export default searchStore;
