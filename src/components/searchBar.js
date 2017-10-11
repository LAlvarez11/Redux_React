import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class SearchBar extends Component {
  constructor(props){
    super(props);//how we initialize state in a class component.

    this.state = {term: ''};
  }


  render() {
    return(
      <div className="search-bar">
    <input
      value = {this.state.term}
      onChange={e => this.onInputChange(e.target.value)} />
  </div>
  );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
