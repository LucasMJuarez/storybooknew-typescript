import React from 'react';
import {shallow} from 'enzyme';
import Amount from './Amount';

it('Have $ and , on number', () => {
    const wrapper = shallow(<Amount amount={54} />);
    expect(wrapper.prop('text')).toContain('$');
    expect(wrapper.prop('text')).toContain(',');
});

it('Have two decimals on number', () => {
    const wrapper = shallow(<Amount amount={0} />);
    expect(wrapper.prop('text')).toContain(',00');
});

it('Parse to amount on number', () => {
    let amount = 30;
    const wrapper = shallow(<Amount amount={amount} />);
    expect(wrapper.prop('text')).toEqual('$30,00');
    amount = -50;
    const negativeWrapper = shallow(<Amount amount={amount} />);
    expect(negativeWrapper.prop('text')).toEqual('$50,00');
    expect(negativeWrapper.prop('type')).toEqual('text_warning');
});

it('have negative symbol if is passed', () => {
    const wrapper = shallow(<Amount showNegativeSymbol={true} amount={-50} />);
    expect(wrapper.prop('text')).toEqual('-$50,00');
    expect(wrapper.prop('type')).toEqual('text_warning');
});

it('Dont parse on string', () => {
    let amount = 'My super string';
    const wrapper = shallow(<Amount amount={amount} />);
    expect(wrapper.prop('text')).toEqual('My super string');
});
