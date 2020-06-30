import React from 'react';

import { GoodsList } from './GoodsList/GoodsList';
import './Goods.css';
import { Shape } from '../Shape/Shape';

export class Goods extends React.Component {
  state = {
    isStarted: false,
  }

  makeListVisible = () => {
    this.setState(prevState => ({
      isStarted: !prevState.isStarted,
    }));
  }

  render() {
    return (
      !this.state.isStarted
        ? (
          <button
            onClick={this.makeListVisible}
            type="button"
            className="start-btn"
          >
            Start
          </button>
        )
        : <GoodsList goodsItems={this.props.goods} />
    );
  }
}

Goods.propTypes = Shape;
