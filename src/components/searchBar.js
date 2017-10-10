import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class SearchBar extends Component {
  constructor(props){
    super(props);//how we initialize state in a class component.

    this.state = {term: ''};
  }


  render() {
    return(
      <div>
    <input onChange={e => this.setState({term : e.target.value})} />

  </div>
  );
  }
}
