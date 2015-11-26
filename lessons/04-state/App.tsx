// https://jsbin.com/zijoxu/edit?js,output
/// <reference path="./../typings/tsd.d.ts"/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';


interface State{
txt:string;
cat:number;

}
interface Props{
  txt:string;
  cat :number;
}


export default
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

    return (

      <div>
      <input type="text" value={this.state.txt}
        onChange={this.update.bind(this)} />
      <h1>{this.state.txt}</h1>
      </div>
    );
  }
}
ReactDOM.render(
  <App cat={5} txt='hello world' />,
  document.getElementById('app')
);

//export default App
