/* eslint-env mocha */
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
const expect = require('chai').expect

const TagString = (props) => {
  return (
    <span onKeyDown={(evt) => props.onKeyDown && props.onKeyDown(evt)}>{props.text}</span>
  )
}

describe('<TagString />', () => {
  it('renders span', () => {
    const wrapper = shallow(<TagString text='blah' />)
    const span = wrapper.find('span')
    expect(span).to.exist
    expect(span.text()).to.equal('blah')
  })

/*
  it('renders an `.icon-star`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.icon-star')).to.have.length(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
  */

  it('simulates click events', () => {
    const onKeyDown = sinon.spy()
    const wrapper = shallow(
      <TagString onKeyDown={onKeyDown} />
    )
    wrapper.find('span').simulate('keyDown')
    expect(onKeyDown).to.have.property('callCount', 1)
  })
})
