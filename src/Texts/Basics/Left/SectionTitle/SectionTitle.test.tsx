import React from 'react';
import {shallow} from 'enzyme';
import SectionTitle from './SectionTitle';

it('is truthy', () => {
    expect(SectionTitle).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<SectionTitle text='Yeaah' />);
    expect(wrapper.children().prop('text')).toContain('Yeaah');
});

it('Use Headline sub-component', () => {
    const wrapper = shallow(<SectionTitle text='Yeaah' isHeadline/>);
    expect(wrapper.find('Title')).toHaveLength(0);
    expect(wrapper.find('Headline')).toHaveLength(1);
    expect(wrapper.find('Headline').prop('text')).toEqual('Yeaah');
});