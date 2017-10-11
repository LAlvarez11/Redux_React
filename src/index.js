import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
const API_KEY = 'AIzaSyBo7vlfKToMVqI9uaqtqtsdS4SQtfzQnVA';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos:[] };

    YTSearch({key: API_KEY, term: 'basketball'},(results) =>{
      this.setState({videos : results});
      console.log(results);
      console.log(this.state.videos);
    });
  }

render (){
  return (
    <div>
        <SearchBar />
        <VideoList videos = {this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
