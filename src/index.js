import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/searchBar';


const API_KEY = 'AIzaSyBo7vlfKToMVqI9uaqtqtsdS4SQtfzQnVA';

const App =  () =>{
    return (
      <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />,document.querySelector('.container'));
