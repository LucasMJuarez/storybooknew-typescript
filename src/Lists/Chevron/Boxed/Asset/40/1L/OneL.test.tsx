import React from 'react';
import { shallow } from 'enzyme';
import OneL from './OneL';

it('is truthy', () => {
    expect(OneL).toBeTruthy();
});

it("Have primaryText 'Yeaah'", () => {
    const wrapper = shallow(<OneL asset={'Allproducts'} isSelected onClick={() => { }} text='Yeaah' />);
    expect(wrapper.find('Text16R').prop('text')).toEqual('Yeaah');
});

it('Have Checkbox', () => {
    const wrapper = shallow(<OneL asset={'Allproducts'} isSelected onClick={() => { }} text='Yeaah' />);
    expect(wrapper.children().find('Checkbox')).not.toBeNull();
});

it('Is touchable', () => {
    const mock = jest.fn();
    const wrapper = shallow(<OneL asset={'Allproducts'} isSelected onClick={mock} text='Línea fija' />);
    wrapper.children().simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
});

it('prop showArrow=true add component Right and checkbox is hidden', () => {
    const wrapper = shallow(<OneL asset={'Allproducts'} isSelected={false} showArrow onClick={() => { }} text='Línea fija' />);
    expect(wrapper.find('Right')).toHaveLength(1);
    expect(wrapper.find('Checkbox')).toHaveLength(0);
});

it('prop showArrow=true and isSelected=true only display Checkbox', () => {
    const wrapper = shallow(<OneL asset={'Allproducts'} isSelected showArrow onClick={() => { }} text='Línea fija' />);
    expect(wrapper.find('Right')).toHaveLength(0);
    expect(wrapper.find('Checkbox')).toHaveLength(1);
});

