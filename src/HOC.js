import React, { Component } from 'react';
import Example from './Spinner.js'

const HOC = (TimeSpinner) => { return class HOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isspin:true,
              }
            setTimeout(()=> this.setState({
                    isspin:false
                }),
                1000
            )
        }
        render() { 
            return ( this.state.isspin?<Example/>: <TimeSpinner {...this} />);
        }
    }
}   
export default HOC;

