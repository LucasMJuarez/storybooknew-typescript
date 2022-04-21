import React from 'react';
import {shallow} from 'enzyme';
import ThreeLink from './ThreeLink';
import Link from '../../Assets/24/Chevron/Link';
import SlimLineCentered from '../../Dividers/SlimLineCentered';

it('Have Link', () => {
    const wrapper = shallow(<ThreeLink title='Yeaah' onClick={() => alert('It works!!!')} />);
    expect(wrapper.find(Link).length).toEqual(1);
});

it('Have SlimLineCentered', () => {
    const wrapper = shallow(<ThreeLink title='Yeaah' onClick={() => alert('It works!!!')} />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(1);
});

it('Have SlimLineCentered', () => {
    const wrapper = shallow(<ThreeLink title='Yeaah' onClick={() => alert('It works!!!')} />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(1);
});

it('Hide SlimLineCentered', () => {
    const wrapper = shallow(<ThreeLink title='Yeaah' onClick={() => alert('It works!!!')} hideLine={true} />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(0);
});

it('Hide Link', () => {
    const wrapper = shallow(<ThreeLink title='Yeaah' onClick={() => alert('It works!!!')} hideLink={true} />);
    expect(wrapper.find(Link).length).toEqual(0);
});
