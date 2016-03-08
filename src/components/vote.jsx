import React  from 'react';
import {List} from 'immutable';

export default class Vote extends React.Component {

  static defaultProps() {
    return {
      pair: List.of()
    };
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  renderButton(entry) {
    return <button
      key={entry}
      disabled={this.isDisabled()}
      onClick={() => this.props.vote(entry)}
      >
      <h1>{entry}</h1>
      {(this.hasVotedFor(entry)) ? <div className="label">Voted</div>: void 0 }
    </button>;
  }

  render() {
    return <div>
      {this.props.pair.map(this.renderButton.bind(this))}
    </div>;
  }
}
