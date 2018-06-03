var Counter = React.createClass({
  getInitialState: function() {
    console.log('getInitialState: stan początkowy');

    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  componentWillMount: function() {
    console.log('componentWillMount: przygotowanie do renderowania')
  },

  render: function() {
    console.log('render: renderowanie..');

    return React.createElement('div', {className: 'numerator'}, 
      React.createElement('p', {className: 'number'}, this.state.counter),
      React.createElement('button', {onClick: this.decrement}, 'Add 1'),
      React.createElement('button', {onClick: this.increment}, 'minus 1')
    );
  },

  componentDidMount() {
    console.log('componentDidMount: po renderowaniu.')
  }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));