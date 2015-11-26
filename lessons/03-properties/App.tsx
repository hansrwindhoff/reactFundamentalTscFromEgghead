// https://jsbin.com/yirifo/edit?html,js,output
/// <reference path="./../typings/tsd.d.ts"/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface State{}
interface Props{
  txt:string;
  cat :number;
}


import { propTypes, defaultProps } from 'react-props-decorators';

@propTypes({
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
})
@defaultProps({
    txt: 'this is the default txt',
    cat: 100
})
class App extends React.Component<Props,State> {
   render (){
    let txt = this.props.txt;
    return <h1>{txt} </h1>
  };

}


ReactDOM.render(
  <App cat={5} txt='hello world' />,
  document.getElementById('app')
);
