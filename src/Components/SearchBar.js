import React from 'react'

class SearchBar extends React.Component{

  constructor() {
        super()      
    }

    render()
    {
      return (<div>  <input type="text" name="searchText" id="searchText"></input><button onClick="search(searchText)">Search</button> </div>)
    }

    search(searchText)
    {
      console.log("searchText",searchText)
    }
  }

  export default SearchBar;