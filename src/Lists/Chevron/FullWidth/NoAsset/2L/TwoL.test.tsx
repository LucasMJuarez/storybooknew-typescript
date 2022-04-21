import React from 'react';
import {shallow} from 'enzyme';
import TwoL from './TwoL';

it('Is truthy', () => {
    expect(TwoL).toBeTruthy();
});

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<TwoL onClick={() => {}} text='Yeaah' secondaryText='Secondary' />);
    expect(wrapper.children().children().first().prop('text')).toContain('Yeaah');
});

it("Have secondaryText 'Secondary'", () => {
    const wrapper = shallow(<TwoL onClick={() => {}} text='Yeaah' secondaryText='Secondary' />);
    expect(wrapper.children().children().at(1).prop('text')).toContain('Secondary');
});

it('Is touchable', () => {
    const mock = jest.fn();
    const wrapper = shallow(<TwoL onClick={mock} text='Yeaah' secondaryText='Secondary' />);
    wrapper.simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
});