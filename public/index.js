import ReactGh2project from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactGh2project />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
