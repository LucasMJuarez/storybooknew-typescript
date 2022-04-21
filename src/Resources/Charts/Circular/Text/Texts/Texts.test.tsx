import React from 'react';
import {shallow} from 'enzyme';
import Texts from './Texts';
import Display from '../../../../../TextCatalog/DISPLAY';
import Headline from '../../../../../TextCatalog/HEADLINE';
import Title from '../../../../../TextCatalog/TITLE';
import Caption from '../../../../../TextCatalog/CAPTION';

it('is truthy', () => {
    expect(Texts).toBeTruthy();
});

it('Texts renders centerText prop on Display component by default', () => {
    const wrapper = shallow(<Texts centerText='Hehee' />);
    expect(wrapper.find(Display).length).toEqual(1);
    expect(wrapper.find(Display).prop('text')).toEqual('Hehee');
});

it('Texts changes center text component by centerLevel prop ', () => {
    let wrapper = shallow(<Texts centerText='Hehee' />);
    expect(wrapper.find(Display).length).toEqual(1);
    expect(wrapper.find(Display).prop('text')).toEqual('Hehee');
    wrapper = shallow(<Texts centerText='Hehee' centerLevel='28L' />);
    expect(wrapper.find(Display).length).toEqual(1);
    expect(wrapper.find(Display).prop('text')).toEqual('Hehee');
    wrapper = shallow(<Texts centerText='Hehee' centerLevel='24L' />);
    expect(wrapper.find(Headline).length).toEqual(1);
    expect(wrapper.find(Headline).prop('text')).toEqual('Hehee');
    wrapper = shallow(<Texts centerText='Hehee' centerLevel='20L' />);
    expect(wrapper.find(Title).length).toEqual(1);
    expect(wrapper.find(Title).prop('text')).toEqual('Hehee');
});
it('Texts center text component always are level:3 align:Center type:text_primary_special_0', () => {
    let wrapper = shallow(<Texts centerText='Hehee' />);
    expect(wrapper.find(Display).prop('level')).toEqual(3);
    expect(wrapper.find(Display).prop('align')).toEqual('Center');
    expect(wrapper.find(Display).prop('type')).toEqual('text_primary_special_0');
    wrapper = shallow(<Texts centerText='Hehee' centerLevel='28L' />);
    expect(wrapper.find(Display).prop('level')).toEqual(3);
    expect(wrapper.find(Display).prop('align')).toEqual('Center');
    expect(wrapper.find(Display).prop('type')).toEqual('text_primary_special_0');
    wrapper = shallow(<Texts centerText='Hehee' centerLevel='24L' />);
    expect(wrapper.find(Headline).prop('level')).toEqual(3);
    expect(wrapper.find(Headline).prop('align')).toEqual('Center');
    expect(wrapper.find(Headline).prop('type')).toEqual('text_primary_special_0');
    wrapper = shallow(<Texts centerText='Hehee' centerLevel='20L' />);
    expect(wrapper.find(Title).prop('level')).toEqual(3);
    expect(wrapper.find(Title).prop('align')).toEqual('Center');
    expect(wrapper.find(Title).prop('type')).toEqual('text_primary_special_0');
});
it('Texts can have headerText', () => {
    const wrapper = shallow(<Texts centerText='Hehee' headerText='My header' />);
    expect(wrapper.find(Caption).length).toEqual(1);
    expect(wrapper.find(Caption).prop('text')).toEqual('My header');
});

it('If no header Caption is not rendered', () => {
    const wrapper = shallow(<Texts centerText='Hehee' />);
    expect(wrapper.find(Caption).length).toEqual(0);
});
it('Texts can have bottomText', () => {
    const wrapper = shallow(<Texts centerText='Hehee' bottomText='My bottomText' />);
    expect(wrapper.find(Caption).length).toEqual(1);
    expect(wrapper.find(Caption).prop('text')).toEqual('My bottomText');
});

it('If no bottom Caption is not rendered', () => {
    const wrapper = shallow(<Texts centerText='Hehee' />);
    expect(wrapper.find(Caption).length).toEqual(0);
});
