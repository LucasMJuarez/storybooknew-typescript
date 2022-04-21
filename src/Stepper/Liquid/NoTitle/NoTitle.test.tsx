import React from 'react';
import {shallow} from 'enzyme';
import NoTitle from '.';
import styles from './NoTitle.styles';

it('is truthy', () => {
    expect(NoTitle).toBeTruthy();
});

it('should have padding', () => {
    const {stepperBackground} = styles;
    const wrapper = shallow(<NoTitle progress='20%'/>);

    expect(wrapper.childAt(0).hasClass(stepperBackground));
});
