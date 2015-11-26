var React = require('react');
var ReactDOM = require('react-dom');
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 2
        };
    }
    update(e) {
        this.setState({ txt: e.target.value, cat: 42 });
    }
    render() {
        return (React.createElement("div", null, React.createElement("input", {type: "text", value: this.state.txt, onChange: this.update.bind(this)}), React.createElement("h1", null, this.state.txt)));
    }
}
exports.App = App;
ReactDOM.render(React.createElement(App, {cat: 5, txt: 'hello world'}), document.getElementById('app'));
