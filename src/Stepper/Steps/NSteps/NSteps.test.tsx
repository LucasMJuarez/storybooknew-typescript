import React from 'react';
import { shallow } from 'enzyme';
import NSteps from '.';
import styles from './NSteps.styles';

it('is truthy', () => {
    expect(NSteps).toBeTruthy();
});

it('should have padding', () => {
    const { stepperBackground } = styles;
    const wrapper = shallow(<NSteps totalSteps={5} currentStep={2} />);

    expect(wrapper.childAt(0).hasClass(stepperBackground));
});
