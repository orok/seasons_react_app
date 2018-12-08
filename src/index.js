import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      lat: null,
      errorMessage: ''
    }
  }
  render(){
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({late:position.coords.latitude});
        },
        (err) => {
          this.setState({errorMessage:err.message});
        }
    );
    return (
      <div>Latitude:{this.state.lat}
      <br/>
      Error:{this.state.errorMessage}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));
