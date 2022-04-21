import React from 'react';
import {shallow} from 'enzyme';
import SectionTitle from '../../Texts/Basics/Left/SectionTitle';
import Label from '../../Labels/Background/Label';
import FatGrey from '../../Dividers/FatGrey';
import LabelStatus from './LabelStatus'

it('Have SectionTitle', () => {
    const wrapper = shallow(<LabelStatus title='Title' category='First' labelText='Active' />);
    expect(wrapper.find(SectionTitle).length).toEqual(1);
    expect(wrapper.find(SectionTitle).prop('text')).toEqual('Title');
});

it('Have FatGrey', () => {
    const wrapper = shallow(<LabelStatus title='Title' category='First' labelText='Active' />);
    expect(wrapper.find(FatGrey).length).toEqual(1);
});

it('Have Label', () => {
    const wrapper = shallow(<LabelStatus title='Title' category='First' labelText='Active' />);
    expect(wrapper.find(Label).length).toEqual(1);
    expect(wrapper.find(Label).prop('category')).toEqual('First');
    
});
