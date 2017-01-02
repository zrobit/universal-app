import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import search from '../actions/searchActions';

@inject('searchStore') @observer
class Search extends Component {
  handleChange (e) {
    search(e.target.value)
  }

  render() {
    const {query, results} = this.props.searchStore;

    return (
      <div>
        <form>
          <input type='text' value={query} onChange={this.handleChange.bind(this)}/>
          <button>Buscar</button>
        </form>
        <ul>
          {results.map(item => <li key={item.key}> {item.name} </li>)}
        </ul>

      </div>
    )
  }
}

export default Search
