import searchStore from '../stores/searchStore';

const url = 'http://swapi.co/api/'

export default function search(query){
  searchStore.queryUpdate(query);
  fetchResults(query);
}


function fetchResults(query){
  fetch(url+'people/?search='+query)
    .then(response => response.json())
    .then(data => {
      const results = data.results;
      let resultsMap = results.map((item,index) => {return {name: item.name, key: index}})
      searchStore.resultsUpdate(resultsMap)
    })
}
