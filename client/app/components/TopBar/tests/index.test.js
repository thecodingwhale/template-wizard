import TopBar from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe( '<TopBar />', () => {
    it( 'should render one <TitleHeader /> components by default', () => {
        const component = shallow(
            <TopBar />
        );
        expect( component.find( 'TitleHeader' ).length ).toEqual( 1 );
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
