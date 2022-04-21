import React from 'react';
import { shallow } from 'enzyme';
import TwoL from './TwoL';

it('is truthy', () => {
    expect(TwoL).toBeTruthy();
});
it("Have primaryText 'Yeaah'", () => {
    const wrapper = shallow(<TwoL asset={"Mobile"} onClick={() => { }} primaryText='Yeaah' />);
    expect(wrapper.children().first().children().last().children().first().prop('text')).toContain('Yeaah');
});
it('Is touchable', () => {
    const mock = jest.fn();
    const wrapper = shallow(<TwoL asset={"Mobile"} onClick={mock} primaryText='Yeaah' />);
    wrapper.simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
});

