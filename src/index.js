import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = "AIzaSyD1x45N6SkvqXAhsq5epOQIE0yXY3YKw-A";
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos : []};

    YTSearch({'key':API_KEY, 'term': 'surfers'}, (videos) => {
      console.log(videos)
      this.setState({videos});
    });
  }
  render () {
    return (
      <div> 
      <SearchBar />
      <VideoDetail video={this.state.videos[0]} />
      <VideoList videos= {this.state.videos} />
    </div>
    )
  }

}


ReactDOM.render(<App />, document.querySelector('.container'))