import React      from 'react';
import ReactDOM   from 'react-dom'
import TestUtils  from 'react-addons-test-utils';
import {Voting}   from '../../src/components/voting';
import {expect}   from 'chai';
import {List}     from 'immutable';

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = TestUtils;

describe('voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={['Trainspotting', '28 Days Later']} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });

  it('invokes a callback when a button is clicked', () => {
    let voteWith;
    const vote = (entry) => voteWith = entry;
    const component = renderIntoDocument(
      <Voting pair={['Trainspotting', '28 Days Later']} vote={vote}/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);
    expect(voteWith).to.equal('Trainspotting');
  });

  it('should add "Voted" label to entries that the user has voted for', () => {
    const component = renderIntoDocument(
      <Voting pair={['Trainspotting', '28 Days Later']} hasVoted="Trainspotting"/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.contain('Voted');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });

  it('Should add voted lavel to second entry user has voted for', () => {
    const component = renderIntoDocument(
      <Voting pair={['Trainspotting', '28 Days Later']} hasVoted="28 Days Later"/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days LaterVoted');
  });

  it('renders just the winner when there is one', () => {
    const component = renderIntoDocument(
      <Voting winner="Trainspotting"/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    const winner = ReactDOM.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.equal('Winner is Trainspotting!');
  });

  it('should disable buttons when user has voted', () => {
    const component = renderIntoDocument(
      <Voting pair={['Trainspotting', '28 Days Later']} hasVoted="Trainspotting"/>
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(2);
    expect(buttons[0].hasAttribute('disabled')).to.equal(true)
    expect(buttons[1].hasAttribute('disabled')).to.equal(true)
  });

  //it('renders as a pure component', () => {
    //const pair = ['Trainspotting', '28 Days Later'];
    //const component = renderIntoDocument(<Voting pair={pair} />);

    //let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    //expect(firstButton.textContent).to.equal('Trainspotting');

    //pair[0] = 'Sunshine';
    //component.setProps({pair: pair});
    //firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    //expect(firstButton.textContent).to.equal('Trainspotting');
  //});

  //it('does update the DOM when prop changes', () => {
    //const pair = List.of('Trainspotting', '28 Days Later');
    //const voting = <Voting pair={pair} />;
    //let component = renderIntoDocument(voting);

    //let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    //expect(firstButton.textContent).to.equal('Trainspotting');

    //const newPair = pair.set(0, 'Sunshine');
    //component = renderIntoDocument(voting);
    //firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    //expect(firstButton.textContent).to.equal('Sunshine');
  //});
});
