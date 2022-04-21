import React from 'react';
import {shallow} from 'enzyme';
import FrequentQuestions from './FrequentQuestions';

it('FrequentQuestions is an svg', () => {
    const wrapper = shallow(<FrequentQuestions />);
    expect(wrapper.type()).toEqual('svg');
});

it('FrequentQuestions is 32x32', () => {
    const wrapper = shallow(<FrequentQuestions />);
    expect(wrapper.prop('width')).toEqual("32px");
    expect(wrapper.prop('height')).toEqual("32px");
});
