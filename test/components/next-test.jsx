import React        from 'react';
import ReactDOM     from 'react-dom'
import TestUtils    from 'react-addons-test-utils';
import {List, Map}  from 'immutable';
import {expect}     from 'chai';
import Tally        from '../../src/components/tally'

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} = TestUtils;

describe('Tally', () => {
  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false;
    const next = () => nextInvoked = true;
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 5});
    const component = renderIntoDocument(
      <Tally pair={pair} tally={tally} next={next} />
    );
    Simulate.click(ReactDOM.findDOMNode(component.refs.next));
    expect(nextInvoked).to.equal(true);
  });
});
