import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button 
        className={this.props.light ? 'light-button' : 'dark-button'}
        onClick={this.props.onClick}>
        Refresh
      </button>
    );
  }
}

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.chooseColor()
    };
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) > 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }

  handleClick = () => {
    this.setState({
      color: this.chooseColor()
    });
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'black' : 'white'}>
          Your Color is {this.formatColor(this.state.color)}
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);
