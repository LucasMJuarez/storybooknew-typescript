import React from 'react';
import { shallow } from 'enzyme';
import TwoL from './TwoL';
import SlimLineCentered from '../../../../../Dividers/SlimLineCentered';

it('is truthy', () => {
    expect(TwoL).toBeTruthy();
});
it("Have primaryText 'Yeaah'", () => {
    const wrapper = shallow(<TwoL asset={"Mobile"} onClick={() => { }} primaryText='Yeaah' secondaryText='Nooo' />);
    expect(wrapper.children().first().children().last().children().first().prop('text')).toContain('Yeaah');
});
it("Have secondaryText 'Yeaah'", () => {
    const wrapper = shallow(<TwoL asset={"Mobile"} onClick={() => { }} primaryText='Nooo' secondaryText='Yeaah' />);
    expect(wrapper.children().first().children().last().children().last().prop('text')).toContain('Yeaah');
});
it('Is touchable', () => {
    const mock = jest.fn();
    const wrapper = shallow(<TwoL asset={"Mobile"} onClick={mock} primaryText='Yeaah' secondaryText='Nooo' />);
    wrapper.simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
});

it('Have SlimLineCentered', () => {
    const wrapper = shallow(<TwoL asset={"Mobile"} onClick={() => { }} primaryText='Yeaah' secondaryText='Nooo' />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(1);
});

it('Hide SlimLineCentered', () => {
    const wrapper = shallow(<TwoL asset={"Mobile"} hideLine={true} onClick={() => { }} primaryText='Yeaah' secondaryText='Nooo' />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(0);
});

