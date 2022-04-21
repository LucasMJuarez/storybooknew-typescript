import React from 'react';
import { shallow } from 'enzyme';
import FiveSteps from '.';
import NSteps from '../NSteps';

it('is truthy', () => {
    expect(FiveSteps).toBeTruthy();
});

it('FiveSteps contains NSteps with props default', () => {

    const propsDefault = {
        totalSteps: 5,
        currentStep: 2
    }
    const wrapper = shallow(<FiveSteps currentStep={propsDefault.currentStep} />);

    expect(wrapper.find(NSteps)).toHaveLength(1);
    expect(wrapper.find(NSteps).prop('totalSteps')).toEqual(propsDefault.totalSteps);
    expect(wrapper.find(NSteps).prop('currentStep')).toEqual(propsDefault.currentStep);
});
