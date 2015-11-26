var React = require('react');
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
        return (React.createElement("div", null));
    }
}
exports.default = App;
