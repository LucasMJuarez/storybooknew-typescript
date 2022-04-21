import React from 'react';
import {shallow} from 'enzyme';
import Sub from '../../../../TextCatalog/SUB';
import Close from '../../../../Assets/24/Close';
import Primary16R from '../../../../Resources/ListsAmount/Left/Primary16R/Primary16R';
import TwoL from './TwoL';

it('Renders ok', () => {
    const TwoLProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        time: '12.00 hs',
        onClick: () => {},
    };
    const wrapper = shallow(<TwoL {...TwoLProps} />);
    expect(wrapper).toBeTruthy();
});

it('Renders Sub and text is description ', () => {
    const TwoLProps = {
        title: 'This is the title',
        description: 'Desde la #AppMiMovistar, también podés pagarla con tarjeta.',
        time: '12.00 hs',
        onClick: () => {},
    };
    const wrapper = shallow(<TwoL {...TwoLProps} />);
    expect(wrapper.find(Sub).length).toEqual(2);
});

it('Renders Close button if isnt permanent and if it is pressed the component disappear', () => {
    const TwoLProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        time: '12.00 hs',
        onClick: () => {},
    };
    const wrapper = shallow(<TwoL {...TwoLProps} />);
    expect(wrapper.find(Close).length).toEqual(0);
});

it('Dont renders Close button if is permanent', () => {
    const TwoLProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        time: '12.00 hs',
        onClick: () => {},
    };
    const wrapper = shallow(<TwoL {...TwoLProps} />);
    expect(wrapper.find(Close).length).toEqual(0);
});

it('Renders Primary16R if props.title and send text property', () => {
    const TwoLProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        time: '12.00 hs',
        onClick: () => {},
    };
    const wrapper = shallow(<TwoL {...TwoLProps} />);
    expect(wrapper.find(Primary16R).length).toEqual(1);
    expect(wrapper.find(Primary16R).prop('text')).toEqual(TwoLProps.title);
});

it('Dont renders Primary16R if props.title is undefined', () => {
    const TwoLProps = {
        title: 'This is the title',
        description: 'This is the description. Max 3 lines.',
        time: '12.00 hs',
        onClick: () => {},
    };
    const wrapper = shallow(<TwoL {...TwoLProps} />);
    expect(wrapper.find(Primary16R).length).toEqual(1);
});
