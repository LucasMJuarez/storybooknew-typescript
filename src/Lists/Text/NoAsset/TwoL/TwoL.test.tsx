import React from 'react';
import {shallow} from 'enzyme';
import TwoL from './TwoL';
import SlimLineCentered from '../../../../Dividers/SlimLineCentered';
import Sub from '../../../../TextCatalog/SUB';
import Body from '../../../../TextCatalog/BODY';

it('Have Primary16R', () => {
    const wrapper = shallow(<TwoL title='Yeaah' hideLine={true} secondary='vence el 26 de oct' />);
    expect(wrapper.find(Body).length).toEqual(1);
    expect(wrapper.find(Body).prop('text')).toEqual('Yeaah');
});

it('Have Secondary14R', () => {
    const wrapper = shallow(<TwoL title='Yeaah' hideLine={true} secondary='vence el 26 de oct' />);
    expect(wrapper.find(Sub).length).toEqual(1);
    expect(wrapper.find(Sub).prop('text')).toEqual('vence el 26 de oct');
});

it('Have SlimLineCentered', () => {
    const wrapper = shallow(<TwoL title='Yeaah' hideLine={false} secondary='vence el 26 de oct' />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(1);
});
