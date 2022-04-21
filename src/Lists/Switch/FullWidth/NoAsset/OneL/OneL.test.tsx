import React from 'react';
import {shallow} from 'enzyme';
import OneL from './OneL';
import Primary16R from '../../../../../Resources/ListsAmount/Left/Primary16R';
import SlimLineCentered from '../../../../../Dividers/SlimLineCentered';

it('Have Primary16R', () => {
    const wrapper = shallow(<OneL title='Yeaah' secondary='Mes 1' />);
    expect(wrapper.find(Primary16R).length).toEqual(1);
    expect(wrapper.find(Primary16R).prop('text')).toEqual('Yeaah');
});

it('Have SlimLineCentered', () => {
    const wrapper = shallow(<OneL title='Yeaah' secondary='Mes 1' showLine={true} />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(1);
});

it('Hide SlimLineCentered', () => {
    const wrapper = shallow(<OneL title='Yeaah' secondary='Mes 1' />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(0);
});
