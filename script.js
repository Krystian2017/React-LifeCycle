var Counter = React.createClass({
  getDefaultProps: function() {
  console.log('getDefaultProps: ustawienie wartości domyślnych propsów');
},

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
      React.createElement('button', {onClick: this.increment}, 'Add 1'),
      React.createElement('button', {onClick: this.decrement}, 'minus 1')
    );
  },

  componentDidMount() {
    console.log('componentDidMount: po renderowaniu.')
  },

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps: komponent otrymał nowe właściwości')
  },

  shouldComponentUpdate() {
    return true;
    console.log('shouldComponentUpdate: sprawdzanie komponentu')
  },

  componentWillUpdate() {
    console.log('componentWillUpdate: przygotowanie na nadchodzące zmiany')
  },

  componentDidUpdate() {
    console.log('componentDidUpdate: manipulacje DOM')
  },

  componentWillUnmount() {
    console.log('componentWillUnmount: koniec komponentu')
  },
});

var element = React.createElement('div', {},
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter)
  );
ReactDOM.render(element, document.getElementById('app'));