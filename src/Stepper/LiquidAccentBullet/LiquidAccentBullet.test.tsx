import React from 'react';
import { shallow } from 'enzyme';
import LiquidAccentBullet from '.';
import styles from './LiquidAccentBullet.styles';

it('is truthy', () => {
    expect(LiquidAccentBullet).toBeTruthy();
});

it('should have padding', () => {
    const { progressBackground } = styles;
    const wrapper = shallow(<LiquidAccentBullet totalSteps={5} currentStep={5} />);

    expect(wrapper.childAt(0).hasClass(progressBackground));
});
