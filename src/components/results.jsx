import React                from 'react';
import {connect}            from 'react-redux';
import {List}               from 'immutable';
import Winner               from './winner';
import Tally                from './tally'
import * as actionCreators  from '../action-creators';

export class Results extends React.Component {
  render() {
    if (this.props.winner) {
      return <Winner ref="winner" winner={this.props.winner} />
    } else {
      return <Tally {...this.props} />
    }
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']) || List.of(),
    tally: state.getIn(['vote', 'tally']) || List.of(),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(
  mapStateToProps,
  actionCreators
)(Results);
