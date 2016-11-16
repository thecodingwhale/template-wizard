import TitleHeader from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe( '<TitleHeader />', () => {
    it( 'should have a prop key "type" and default value is "h1"', () => {
        const component = shallow(
            <TitleHeader></TitleHeader>
        );
        const props = component.instance().props;
        expect( props.type ).toEqual( 'h1' );
        expect( component.find( 'h1' ).length ).toEqual( 1 );
    });

    it( 'should return a "h2" tag if prop key "type" is also "h2"', () => {
        const component = shallow(
            <TitleHeader type="h2"></TitleHeader>
        );
        const props = component.instance().props;
        expect( props.type ).toEqual( 'h2' );
        expect( component.find( 'h2' ).length ).toEqual( 1 );
    });

    it( 'should return a "h3" tag if prop key "type" is also "h3"', () => {
        const component = shallow(
            <TitleHeader type="h3"></TitleHeader>
        );
        const props = component.instance().props;
        expect( props.type ).toEqual( 'h3' );
        expect( component.find( 'h3' ).length ).toEqual( 1 );
    });

    it( 'should return a "h4" tag if prop key "type" is also "h4"', () => {
        const component = shallow(
            <TitleHeader type="h4"></TitleHeader>
        );
        const props = component.instance().props;
        expect( props.type ).toEqual( 'h4' );
        expect( component.find( 'h4' ).length ).toEqual( 1 );
    });

    it( 'should return a "h5" tag if prop key "type" is also "h5"', () => {
        const component = shallow(
            <TitleHeader type="h5"></TitleHeader>
        );
        const props = component.instance().props;
        expect( props.type ).toEqual( 'h5' );
        expect( component.find( 'h5' ).length ).toEqual( 1 );
    });

    it( 'should return a "h6" tag if prop key "type" is also "h6"', () => {
        const component = shallow(
            <TitleHeader type="h6"></TitleHeader>
        );
        const props = component.instance().props;
        expect( props.type ).toEqual( 'h6' );
        expect( component.find( 'h6' ).length ).toEqual( 1 );
    });
});
