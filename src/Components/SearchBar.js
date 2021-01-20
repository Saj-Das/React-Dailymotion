import React from 'react'

class SearchBar extends React.Component{

  constructor() {
        super()  
        this.state={searchText=""};    
    }

    render()
    {
      return (<div>  
      <input type="text" value="this.state.searchText" name="searchText" id="searchText"></input>
      <button onClick={(e) => this.search()}>Search</button> 
      </div>)
    }

    search()
    {
      console.log("searchText",this.state.searchText)
    }
  }

  export default SearchBar;