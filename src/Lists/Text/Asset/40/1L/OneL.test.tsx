import React from 'react';
import {shallow} from 'enzyme';
import OneL from './OneL';
import SlimLineCentered from '../../../../../Dividers/SlimLineCentered';
import Text16R from '../../../../../Resources/ListsChevron/Text16R';

it('is truthy', () => {
    expect(OneL).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<OneL asset={'Add'} onClick={() => {}} text='Yeaah' />);
    expect(wrapper.find(Text16R).prop('text')).toEqual('Yeaah');
});

it('Is touchable', () => {
    const mock = jest.fn();
    const wrapper = shallow(<OneL asset={'Add'} onClick={mock} text='Yeaah' />);
    wrapper.simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
});

it('Have SlimLineCentered', () => {
    const wrapper = shallow(<OneL asset={'Add'} onClick={() => {}} text='Yeaah' />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(1);
});

it('Hide SlimLineCentered', () => {
    const wrapper = shallow(<OneL asset={'Add'} hideLine={true} onClick={() => {}} text='Yeaah' />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(0);
});
