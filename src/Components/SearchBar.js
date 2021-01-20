import React from 'react'

class SearchBar extends React.Component{

  constructor() {
        super()  
        this.state={searchText:null};    
        this.handleChange = this.handleChange.bind(this);
    }

 handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
    render()
    {
      return (<div>  
      <input type="text" value={this.state.searchText}  onChange={ this.handleChange }  name="searchText" id="searchText"></input>
      <button onClick={(e) => this.search()}>Search</button> 
      </div>)
    }

    search()
    {
      console.log("searchText",this.state.searchText)
    }
  }

  export default SearchBar;