import React from 'react';
import {shallow} from 'enzyme';
import TwoL from './TwoL';
import Amount from '../../../../Resources/ListsAmount/Right/Amount';
import Primary16R from '../../../../Resources/ListsAmount/Left/Primary16R';
import Secondary14R from '../../../../Resources/ListsAmount/Left/Secondary14R';
import SlimLineCentered from '../../../../Dividers/SlimLineCentered';

it('Have Amount', () => {
    const wrapper = shallow(<TwoL title='Yeaah' amount={33} secondary='vence el 26 de oct' />);
    expect(wrapper.find(Amount).length).toEqual(1);
    expect(wrapper.find(Amount).prop('amount')).toEqual(33);
});

it('Have Primary16R', () => {
    const wrapper = shallow(<TwoL title='Yeaah' amount={33} secondary='vence el 26 de oct' />);
    expect(wrapper.find(Primary16R).length).toEqual(1);
    expect(wrapper.find(Primary16R).prop('text')).toEqual('Yeaah');
});

it('Have Secondary14R', () => {
    const wrapper = shallow(<TwoL title='Yeaah' amount={33} secondary='vence el 26 de oct' />);
    expect(wrapper.find(Secondary14R).length).toEqual(1);
    expect(wrapper.find(Secondary14R).prop('text')).toEqual('vence el 26 de oct');
});

it('Have SlimLineCentered', () => {
    const wrapper = shallow(<TwoL title='Yeaah' amount={33} secondary='vence el 26 de oct' hideLine={false} />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(1);
});