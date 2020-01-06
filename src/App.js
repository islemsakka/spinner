import React, { Component } from 'react';
import './App.css';
//import  Example  from './Spinner.js';
import MovieList from './MovieList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
  }

  }
  
  render() { return <div className='movie'><MovieList/></div>
      
  }
}
 
export default App;

