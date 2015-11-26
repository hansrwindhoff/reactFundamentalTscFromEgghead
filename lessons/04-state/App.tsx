// https://jsbin.com/zijoxu/edit?js,output
/// <reference path="./../typings/tsd.d.ts"/>
import * as React from 'react';


interface State{
txt:string;
cat:number;

}
interface Props{
  txt:string;
  cat :number;
}


class App extends React.Component<Props,State> {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 2
    }
  }
  update(e){
    this.setState({txt: e.target.value, cat :42})
  }
  render(){

    return (<div></div>
			//React.createElement("div", null, React.createElement("input", {type: "text", onChange: this.update.bind(this)}), React.createElement("h1", null, this.state.txt))
      // <div>
      // <input type="text"
      //   onChange={this.update.bind(this)} />
      // <h1>{this.state.txt}</h1>
      // </div>
    );
  }
}

export default App
