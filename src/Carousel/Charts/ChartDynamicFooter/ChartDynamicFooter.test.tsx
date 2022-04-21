import React from 'react';
import { shallow } from 'enzyme';
import ChartDynamicFooter from './ChartDynamicFooter';
import styles from './ChartDynamicFooter.styles';


const mockFn = jest.fn();
const { chartFooterContainer, inline } = styles;
const mockData = [
    {
        title: "Datos de Test Drive",
        subtitle: "Vence 31 de ago '21, 00:40",
        onClick: mockFn,
    }
];

describe('Testing all props and funtionality of component <ChartDynamicFooter />', () => {

    it('ChartDynamicFooter renders ok', () => {
        expect(() => shallow(<ChartDynamicFooter rightArrow data={mockData} currentIndex={0} />)).not.toThrow();
    });

    it('Check chassName component', () => {
        const wrapper = shallow(<ChartDynamicFooter rightArrow={true} data={mockData} currentIndex={0} />);
        expect(wrapper.find('[data-testid="dynamic-footer-0"]').hasClass(chartFooterContainer)).toBeTruthy();
        expect(wrapper.find('[data-testid="title-container"]').hasClass(inline)).toBeTruthy()
    });

    it('Check onClick works', () => {
        const wrapper = shallow(<ChartDynamicFooter rightArrow data={mockData} currentIndex={0} />);
        wrapper.find('[data-testid="dynamic-footer-0"]').simulate('click');
        expect(mockData[0].onClick).toHaveBeenCalled();
    });

    it('Check title and subtitle props', () => {
        const wrapper = shallow(<ChartDynamicFooter data={mockData} currentIndex={0} />);
        expect(wrapper.find('[data-testid="title"]').prop('text')).toEqual("Datos de Test Drive");
        expect(wrapper.find('[data-testid="subtitle"]').prop('text')).toEqual("Vence 31 de ago '21, 00:40");
    });
    
    it('Check rightArrow is disable', () => {
        const wrapper = shallow(<ChartDynamicFooter rightArrow={false} data={mockData} currentIndex={0} />);
        expect(wrapper.find('[data-testid="title-container"]').hasClass(inline)).toBeFalsy()
    });

    it('Check svg right arrow', () => {
        const wrapper = shallow(<ChartDynamicFooter rightArrow data={mockData} currentIndex={0} />);
        expect(wrapper.find('[data-testid="right-arrow"]').type()).toEqual('svg');
        expect(wrapper.find('[data-testid="right-arrow"]').prop('width')).toEqual('16');
        expect(wrapper.find('[data-testid="right-arrow"]').prop('height')).toEqual('16');
    });
});

