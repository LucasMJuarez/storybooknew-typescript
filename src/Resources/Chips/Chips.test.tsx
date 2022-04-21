import React from 'react';
import { shallow } from 'enzyme';
import Sub from '../../TextCatalog/SUB';
import styles from './Chips.styles';
import Chips from '.';

let mockFn = jest.fn();
const defaultProps = {
    title: 'PLAN IDEAL',
    onClick: mockFn,
    showIcon: true,
    isSelected: true
};

describe('Test ChipDefault', () => {
    it('is truthy', () => {
        expect(Chips).toBeTruthy();
    });

    it('Have text of PLAN IDEAL in the sub', () => {
        const wrapper = shallow(<Chips {...defaultProps} />);
        expect(wrapper.find(Sub).prop('text')).toEqual('PLAN IDEAL');
    });

    it('is Clicked', () => {
        const wrapper = shallow(<Chips {...defaultProps} />);
        expect(mockFn.mock.calls.length).toEqual(0);
        wrapper.simulate('click');
        expect(mockFn.mock.calls.length).toEqual(1);
    });

    it('Wrapper has a style componentIsSelected', () => {
        const wrapper = shallow(<Chips {...defaultProps} />);
        const componentIsSelected = styles.componentIsSelected;
        expect(wrapper.props().className).toContain(componentIsSelected);
    });

    it('Wrapper has a style componentNotSelected', () => {
        const wrapper = shallow(<Chips title='PLAN IDEAL' onClick={mockFn} showIcon={true} isSelected={false} />);
        const componentNotSelected = styles.componentNotSelected;
        expect(wrapper.props().className).toContain(componentNotSelected);
    });

    it('Wrapper has a style textWithIcon', () => {
        const wrapper = shallow(<Chips {...defaultProps} />);
        const textWithIcon = styles.textWithIcon;
        expect(wrapper.find('[data-testid="wrapper-sub"]').props().className).toContain(textWithIcon);
    });

    it('Wrapper has a style textWithIcon', () => {
        const wrapper = shallow(<Chips title='PLAN IDEAL' onClick={mockFn} showIcon={false} isSelected={false} />);
        const textWithoutIcon = styles.textWithoutIcon;
        expect(wrapper.find('[data-testid="wrapper-sub"]').props().className).toContain(textWithoutIcon);
    });

});