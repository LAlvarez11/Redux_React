import _  from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
const API_KEY = 'AIzaSyBo7vlfKToMVqI9uaqtqtsdS4SQtfzQnVA';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo: null
    };

    this.videoSearch('NBA')
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (results) =>{
      this.setState({
        videos : results,
        selectedVideo : results[0]
      });

    });
  }

render (){
const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

  return (
    <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail  video = {this.state.selectedVideo}/>
        <VideoList
           onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos = {this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
