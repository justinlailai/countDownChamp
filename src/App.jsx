import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render(){
        return(
            <div className="App">
                <div>Countdown to December 25, 2017</div>
                <div>
                    <div>14 days</div>
                    <div>30hours</div>
                    <div>15minutes</div>
                    <div>20seconds</div>
                </div>
                <div>
                    <input type="text" placeholder='new date'/>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;