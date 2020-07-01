import React from 'react';

import { Buttons } from './Buttons/Buttons';
import './GoodsList.css';
import { Shape } from '../../Shape/Shape';

export class GoodsList extends React.Component {
  state = {
    goodsItems: this.props.goodsItems,
    minLength: 1,
  }

  reverse = () => {
    this.setState(prevState => ({
      goodsItems: [...prevState.goodsItems.reverse()],
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goodsItems: [...prevState.goodsItems.sort((a, b) => a.length - b.length)],
    }));
  }

  sortByName = () => {
    this.setState(prevState => ({
      goodsItems: [...prevState.goodsItems.sort((a, b) => a.localeCompare(b))],
    }));
  }

  setMinLength = value => (
    this.setState({ minLength: value })
  )

  render() {
    return (
      <div className="list-wrapper">
        <ul className="goods-list list">
          {this.state.goodsItems.map(goodsItem => (
            goodsItem.length > this.state.minLength
              ? (
                <li className="list-item" key={goodsItem}>
                  {goodsItem}
                </li>
              )
              : ''
          ))}
        </ul>
        <Buttons
          reverse={this.reverse}
          sortByLength={this.sortByLength}
          sortByName={this.sortByName}
          setMinLength={this.setMinLength}
        />
      </div>
    );
  }
}

GoodsList.propTypes = Shape;
