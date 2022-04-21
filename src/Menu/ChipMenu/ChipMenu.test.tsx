import React from 'react';
import { shallow } from 'enzyme';
import ChipMenu from '.';
import Chips from '../../Resources/Chips/Chips';

let mockFn = jest.fn();
const defaultProps = [
    <Chips key={0} title=' PLAN IDEAL' onClick={() => { }} showIcon={true} isSelected={true} />,
    <Chips key={1} title=' 5GB' onClick={() => { }} showIcon={true} isSelected={false} />,
    <Chips key={2} title=' 8GB' onClick={() => { }} showIcon={true} isSelected={false} />
]
describe('Test ChipMenu', () => {
    it('is truthy', () => {
        expect(ChipMenu).toBeTruthy();
    });

    it('Have three Childrens', () => {
        const wrapper = shallow(<ChipMenu>{...defaultProps}</ChipMenu>);
        expect(wrapper.find(Chips)).toHaveLength(3);
    });

});