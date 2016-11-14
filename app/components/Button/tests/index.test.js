import Button from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Button />', () => {
  it('renders a <button>', () => {
    const component = shallow(
      <Button></Button>
    );
    expect(
      component.find('button').node
    ).toExist();
  });

  it('should have default prototype', () => {
    const component = shallow(
      <Button></Button>
    );
    const type = component.instance().props.type;
    expect(type).toEqual('default');
  });
});
