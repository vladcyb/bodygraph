import React        from 'react';
import ReactDOM     from 'react-dom'
import TestUtils    from 'react-addons-test-utils';
import {List, Map}  from 'immutable';
import {expect}     from 'chai';
import {Results}    from '../../src/components/results';

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} = TestUtils;

describe('Results', () => {
  it('render entries with vote count or zero', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 5});
    const component = renderIntoDocument(<Results pair={pair} tally={tally} />);
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
    const [train, days] = entries.map(e => e.textContent);

    expect(entries.length).to.equal(2);
    expect(train).to.contain('Trainspotting');
    expect(train).to.contain('5');
    expect(days).to.contain('28 Days Later');
    expect(days).to.contain('0');
  });

  it('renders the winner when there is one', () => {
    const results = <Results 
      winner="Trainspotting"
      pair={List.of('Trainspotting', '28 Days Later')}
      tally={Map()}
    />;
    const component = renderIntoDocument(results);
    const winner = ReactDOM.findDOMNode(component.refs.winner);

    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  });
});
