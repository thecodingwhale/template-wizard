import Payslip from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe( '<Payslip />', () => {
    it( 'should have a prop key "layout" and default value is "two-column"', () => {
        const component = shallow(
            <Payslip></Payslip>
        );
        const props = component.instance().props;
        expect( props.layout ).toEqual( 'two-column' );
    });

    it( 'should set the accept "full-width" as a new prop layout', () => {
        const component = shallow(
            <Payslip layout="full-width" />
        );
        const props = component.instance().props;
        expect( props.layout ).toEqual( 'full-width' );
    });
});
