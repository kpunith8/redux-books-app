import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ""
    };
  }

  onInputChange = event => {
    this.setState({ searchString: event.target.value });
  };

  onEnter = event => {
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      this.props.onVideoSearch(event.target.value);
    }
  };

  render() {
    return (
      <div style={{width: '500px'}}>
        <input
          value={this.state.searchString}
          className="search-bar"
          onChange={this.onInputChange}
          onKeyUp={this.onEnter}
          style={{width: '700px', margin: '15px'}}
          placeholder="Search for a video"
        />
        <button onClick={this.onEnter} style={{width: '700px', margin: '15px'}}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
