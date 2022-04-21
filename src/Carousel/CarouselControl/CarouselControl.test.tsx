import React from 'react';
import { shallow } from 'enzyme';
import CarouselControl from '.';
import styles from './CarouselControl.styles'

describe('Testing component <CarouselControl />', () => {
    
    const { bulletActive, bulletDisable, bulletsContainer } = styles;

    beforeEach(() => {
        shallow(<CarouselControl show={1} size={0} currentIndex={0} />);
    });

    it('CarouselControl renders ok', () => {
        expect(() => shallow(<CarouselControl show={1} size={6} currentIndex={1} />)).not.toThrow();
    });

    it('Check bullets container has className', () => {
        const wrapper = shallow(<CarouselControl show={1} size={6} currentIndex={2} />);
        expect(wrapper.find('[data-testid="bullets-container"]').hasClass(bulletsContainer)).toBeTruthy()
    });

    it('Check show active bullets and disable bullets', () => {
        const wrapper = shallow(<CarouselControl show={2} size={4} currentIndex={1} />);
        expect(wrapper.find(`.${bulletActive}`).length).toEqual(2);
        expect(wrapper.find(`.${bulletDisable}`).length).toEqual(2);
    });

    it('Check if children are the some quantity to size props', () => {
        const wrapper = shallow(<CarouselControl show={1} size={3} currentIndex={1} />);
        expect(wrapper.children().length).toEqual(3);
    });

    it('Check index current position', () => {
        const wrapper = shallow(<CarouselControl show={1} size={6} currentIndex={2} />);
        expect(wrapper.find('[data-testid="bullet-2"]').hasClass(bulletActive)).toBeTruthy()
    });
});
