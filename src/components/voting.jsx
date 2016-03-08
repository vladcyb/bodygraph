import React                from 'react';
import {List}               from 'immutable';
import {connect}            from 'react-redux';
import Winner               from './winner';
import Vote                 from './vote';
import * as actionCreators  from '../action-creators';

export class Voting extends React.Component {

  renderVote() {
    return <Vote {...this.props} />
  }

  renderWinner() {
    return <Winner ref="winner" winner={this.props.winner}/>
  }

  render() {
    return <div className="voting">
      {this.props.winner ? this.renderWinner() : this.renderVote()}
    </div>
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']) || List.of(),
    hasVoted: state.get('hasVoted'),
    winer: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
