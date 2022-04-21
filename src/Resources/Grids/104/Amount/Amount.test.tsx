import React from 'react';
import {shallow} from 'enzyme';
import Amount from '.';
import Sub from '../../../../TextCatalog/SUB';

it('is truthy', () => {
    expect(Amount).toBeTruthy();
});
it('Have text of amount and the $ in the sub', () => {
    const wrapper = shallow(<Amount onClick={() => {}} amount={50} />);
    expect(wrapper.children().children().first().prop('text')).toEqual('$');
    expect(wrapper.find(Sub).prop('text')).toEqual('$');
    expect(wrapper.children().children().last().text()).toEqual('50');
});
it('Have text with thousands dot', () => {
    const wrapper = shallow(<Amount onClick={() => {}} amount={5050} />);
    expect(wrapper.children().children().last().text()).toEqual('5.050');
});
it('Have text with decimals comma', () => {
    const wrapper = shallow(<Amount onClick={() => {}} amount={50.5} />);
    expect(wrapper.children().children().last().text()).toEqual('50,50');
});
it('Have -$ in the sub when negative', () => {
    const wrapper = shallow(<Amount onClick={() => {}} amount={-50} />);
    expect(wrapper.children().children().first().prop('text')).toEqual('-$');
    expect(wrapper.find(Sub).prop('text')).toEqual('-$');
    expect(wrapper.children().children().last().text()).toEqual('50');
});
it('Have onClick action', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Amount onClick={mock} amount={50} />);
    wrapper.simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
    wrapper.simulate('click');
    wrapper.simulate('click');
    expect(mock.mock.calls.length).toEqual(3);
});
