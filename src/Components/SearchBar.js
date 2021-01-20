import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { searchText: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
  render() {
    return (
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          value={this.state.searchText}
          onChange={this.handleChange}
          name="searchText"
          id="searchText"
          aria-label="search"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            onClick={e => this.search()}
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    );
  }

  search() {
    console.log("searchText", this.state.searchText);
  }
}

export default SearchBar;
