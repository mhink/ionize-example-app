import React from 'react';
import Ionize from 'react-ionize';
import { BrowserWindow } from 'electron';
import { map, range } from 'lodash';
import path from 'path';

const SIZES = [
  [ 200, 200],
  [ 300, 300],
  [ 400, 400],
  [ 300, 300],
];

const POSITIONS = [
  [ 120, 120],
  [ 120, 200],
  [ 200, 200],
  [ 200, 120],
];

const ITEMS = [
  'ONE',
  'TWO',
  'THREE',
  'FOUR',
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      show: false,
    };
  }

  componentDidMount() {
    const { i } = this.state;
    setTimeout(() => this.setState({ i: (i+1) % 4 }), 1000)
  }

  componentDidUpdate() {
    const { i } = this.state;
    setTimeout(() => this.setState({ i: (i+1) % 4 }), 1000)
  }

  render() {
    const { i } = this.state;
    return <app>
      <menu>
        <submenu label="Electron">
          <about />
          <sep />
          <hide />
          <hideothers />
          <unhide />
          <sep />
          <quit />
        </submenu>
        <submenu label="Custom Menu">
          {map(range(i+1), n => (
            <item key={ITEMS[n]} label={ITEMS[n]} />
          ))}
        </submenu>
      </menu>
      <window
        show={this.state.show}
        onReadyToShow={() => this.setState({ show: true })}
        file={path.resolve(__dirname, 'index.html')}
        position={POSITIONS[i]}
        size={SIZES[i]}
      />
    </app>
  }
}

Ionize.start(
  <App />,
  () => console.log("Finished Ionize.start()")
);
