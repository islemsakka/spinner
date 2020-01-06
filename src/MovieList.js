import React, { Component } from 'react';
import HOC from './HOC.js'
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
      rate:"",
      link:"",
      list:[{name:'avenger', rate:4, link:'https://media.senscritique.com/media/000018476719/325/Avengers_Endgame.jpg'},{name:'annihilation', rate:3, link:'https://media.senscritique.com/media/000017617001/325/Annihilation.jpg'}]
      }
          
    }
    ConstruirList=()=>{
        this.setState({
         
        })
      }
    render() { 
        return ( <div><h1>Movie List</h1>
                {this.state.list.map((e)=><div className='exemple'>
                <img className='img' src={e.link} alt='pic' />
                <div ><i style={{ color: e.rate >= 1 ? 'black' : 'grey' }} className="fas fa-star"></i><i style={{ color: e.rate >= 2 ? 'black' : 'grey' }} class="fas fa-star"></i><i style={{ color: e.rate >= 3 ? 'black' : 'grey' }} class="fas fa-star"></i><i style={{ color: e.rate >= 4 ? 'black' : 'grey' }} class="fas fa-star"></i><i style={{ color: e.rate === 5 ? 'black' : 'grey' }} class="fas fa-star"></i></div>
                <span>{e.name}</span>
            </div>)}</div>
        
            )
       
    }
}
 
export default HOC(MovieList);