import React from 'react';

export default class Tally extends React.Component {
  static defaultProps() {
    return {
      pair: List.of()
    }
  }

  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }

  renderEntry(entry) {
    return <div key={entry} className="entry">
      <h1>{entry}</h1>
      <div className="voteCount">
        {this.getVotes(entry)}
      </div>
    </div>;
  }

  renderEntries() {
    return this.props.pair.map(this.renderEntry.bind(this));
  }

  renderManagement() {
    return <div className="management">
      <button ref="next" className="next" onClick={this.props.next}>
        Next
      </button>
    </div>
  }

  render() {
    return <div className="results">
      {this.renderEntries()}
      {this.renderManagement()}
    </div>;
  }
}
