import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyD1x45N6SkvqXAhsq5epOQIE0yXY3YKw-A";
const App = () =>{
return (
  <div> 
    <SearchBar />
  </div>
  );
}


ReactDOM.render(<App />, document.querySelector('.container'))