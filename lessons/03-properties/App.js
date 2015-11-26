var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var ReactDOM = require('react-dom');
var react_props_decorators_1 = require('react-props-decorators');
let App = class extends React.Component {
    render() {
        let txt = this.props.txt;
        return React.createElement("h1", null, txt, " ");
    }
    ;
};
App = __decorate([
    react_props_decorators_1.propTypes({
        txt: React.PropTypes.string,
        cat: React.PropTypes.number.isRequired
    }),
    react_props_decorators_1.defaultProps({
        txt: 'this is the default txt',
        cat: 100
    }), 
    __metadata('design:paramtypes', [])
], App);
ReactDOM.render(React.createElement(App, {cat: 5, txt: 'hello world'}), document.getElementById('app'));
