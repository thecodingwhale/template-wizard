import Sidebar from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe( '<Sidebar />', () => {
    let component;
    beforeEach( () => {
        component = shallow(
            <Sidebar></Sidebar>
        );
    });

    it( 'should have 2 total div by default', () => {
        expect(
            component.find( 'div' ).length
        ).toEqual( 2 );
    });

    it( 'should have prop key "position" and the value is equal to "left"', () => {
        expect(
            component.instance().props.position
        ).toEqual( 'left' );
    });

    it( 'should have a prop key "title" and the value is equal to empty string as default', () => {
        expect(
            component.instance().props.title
        ).toEqual( '' );
    });

    it( 'should return "right" as expected value', () => {
        const wrapper = shallow(
            <Sidebar position="right"></Sidebar>
        );
        expect(
            wrapper.instance().props.position
        ).toEqual( 'right' );
    });

    it( 'should render title bar', () => {
        const wrapper = shallow(
            <Sidebar title="Sample Test"></Sidebar>
        );
        expect( wrapper.find( 'div' ).length ).toEqual( 3 );
    });
});
