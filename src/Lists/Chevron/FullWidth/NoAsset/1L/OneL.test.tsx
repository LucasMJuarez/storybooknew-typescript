import React from 'react';
import {shallow} from 'enzyme';
import OneL from './OneL';
import SlimLineCentered from '../../../../../Dividers/SlimLineCentered';

it('is truthy', () => {
    expect(OneL).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<OneL onClick={() => {}} text='Yeaah' />);
    expect(wrapper.children().first().prop('text')).toContain('Yeaah');
});
it('Is touchable', () => {
    const mock = jest.fn();
    const wrapper = shallow(<OneL onClick={mock} text='Yeaah' />);
    wrapper.simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
});

it('Have SlimLineCentered', () => {
    const mock = jest.fn();
    const wrapper = shallow(<OneL text='Yeaah' onClick={mock} />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(1);
});

it('Hide SlimLineCentered', () => {
    const mock = jest.fn();
    const wrapper = shallow(<OneL text='Yeaah' hideLine={true} onClick={mock} />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(0);
});