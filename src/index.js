import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyBo7vlfKToMVqI9uaqtqtsdS4SQtfzQnVA';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos:[] };

    YTSearch({key: API_KEY, term: 'basketball'},(results) =>{
      this.setState({videos : results});
    });
  }

render (){
  return (
    <div>
        <SearchBar />
        <VideoDetail video = {this.state.videos[0]}/>
        <VideoList videos = {this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
