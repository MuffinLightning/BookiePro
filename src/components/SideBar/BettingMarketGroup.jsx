import React from 'react';
import './BettingMarketGroup.less';

const BettingMarketGroup = React.createClass({
  render() {
    return (
      <div className='betting-market-node-container'
        key={ this.props.id }
        onClick={ this.props.onClick  } >
        { this.props.data.isSelected ?
          <div className='betting-market-label-container-selected'>
            <label> { this.props.name } </label>
          </div>
          :
          <div className='betting-market-label-container'>
            <label> { this.props.name } </label>
          </div>
         }
      </div>
    );
  }
});

export default BettingMarketGroup;
