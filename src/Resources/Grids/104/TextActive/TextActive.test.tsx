import React from 'react';
import {shallow} from 'enzyme';
import TextActive from '.';
import Sub from '../../../../TextCatalog/SUB';

it('is truthy', () => {
    expect(TextActive).toBeTruthy();
});
it('Have text of amount and the $ in the sub', () => {
    const wrapper = shallow(<TextActive onClick={() => {}} amount={50} />);
    expect(wrapper.children().children().first().text()).toEqual('50');
    expect(wrapper.find(Sub).prop('text')).toEqual('GB');
    expect(wrapper.children().children().last().prop('text')).toEqual('GB');
});
it('Have onClick action', () => {
    const mock = jest.fn();
    const wrapper = shallow(<TextActive onClick={mock} amount={50} />);
    wrapper.simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
    wrapper.simulate('click');
    wrapper.simulate('click');
    expect(mock.mock.calls.length).toEqual(3);
});
