import React from 'react';
import { shallow } from 'enzyme';
import ChartFooter from './ChartFooter';
import styles from './ChartFooter.styles';

const mockFn = jest.fn();
const { chartFooterContainer, inline } = styles;

describe('Testing all props and funtionality of component <ChartFooter />', () => {

    it('ChartFooter renders ok', () => {
        expect(() => shallow(<ChartFooter title={"title"} subtitle={"subtitle"} />)).not.toThrow();
    });

    it('Check chassName component', () => {
        const wrapper = shallow(<ChartFooter title={"title"} subtitle={"subtitle"} rightArrow />);
        expect(wrapper.find('[data-testid="chart-footer-container"]').hasClass(chartFooterContainer)).toBeTruthy();
        expect(wrapper.find('[data-testid="title-container"]').hasClass(inline)).toBeTruthy()
    });
    
    it('Check onClick props', () => {
        const wrapper = shallow(<ChartFooter title={"title"} subtitle={"subtitle"} onClick={mockFn} />);
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });

    it('Check rightArrow is disable', () => {
        const wrapper = shallow(<ChartFooter title={"title"} subtitle={"subtitle"} rightArrow={false} />);
        expect(wrapper.find('[data-testid="title-container"]').hasClass(inline)).toBeFalsy()
    });

    it('Check title and subtitle props', () => {
        const wrapper = shallow(<ChartFooter title={"testing title"} subtitle={"testing subtitle"} rightArrow />);
        expect(wrapper.find('[data-testid="title"]').prop('text')).toEqual('testing title');
        expect(wrapper.find('[data-testid="subtitle"]').prop('text')).toEqual('testing subtitle');
    });

    it('Check svg right arrow', () => {
        const wrapper = shallow(<ChartFooter title={"title"} subtitle={"subtitle"} rightArrow />);
        expect(wrapper.find('[data-testid="right-arrow"]').type()).toEqual('svg');
        expect(wrapper.find('[data-testid="right-arrow"]').prop('width')).toEqual('16');
        expect(wrapper.find('[data-testid="right-arrow"]').prop('height')).toEqual('16');
    });
});

