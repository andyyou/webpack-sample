'use strict';

import React from 'react';
import One from './one';
import Two from './two';
import './scss/style.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: true,
    }
  }

  _toggle() {
    this.setState({
      switch: !this.state.switch,
    });
  }

  render() {

    return (
      <div>
        <input type="button" className="button" onClick={this._toggle.bind(this)} value="Press HERE" />
        {
          this.state.switch ? <One />: <Two />
        }
      </div>
    );
  }
}

React.render(<Main />, document.body);



