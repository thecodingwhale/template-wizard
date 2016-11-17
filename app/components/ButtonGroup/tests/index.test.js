import ButtonGroup from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe( '<ButtonGroup />', () => {
    it( 'should have default props', () => {
        const component = shallow(
            <ButtonGroup></ButtonGroup>
        );
        const props = component.instance().props;
        expect( props.children ).toEqual( '' );
    });
});
