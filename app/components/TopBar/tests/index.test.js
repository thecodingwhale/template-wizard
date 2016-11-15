import TopBar from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe( '<TopBar />', () => {
    it( 'renders a <h1> for the title', () => {
        const component = shallow(
            <TopBar />
        );
        expect(
            component.find( 'h1' ).node
        ).toExist();
    });

    it( 'should have a prop title and default string must be "Default TopBar Title"', () => {
        const topBar = shallow(
            <TopBar />
        );
        const props = topBar.instance().props;
        expect( props.title ).toExist();
        expect( props.title ).toEqual( 'Default TopBar Title' );
    });
});
