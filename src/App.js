import React,{Component} from 'react'
import axios from 'axios'
import "./App.css"


class App extends Component {

state={
  count:0
};

increment =()=>{
  this.setState({
    count: this.state.count +1
  });
};


render(){

 return <div className="app">
   <h2> Counter App</h2>
   <button onClick={this.increment}>
   Clicked {this.state.count} times
   </button> 
</div> 
}

}
export default App;
