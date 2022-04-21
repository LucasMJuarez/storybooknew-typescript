/**
 * @jest-environment jsdom
*/
import React from 'react';
import {mount, shallow} from 'enzyme';
import GenericCarousel from './GenericCarousel';
import styles from './GenericCarousel.styles';
import * as useWindowSize from '../../utils/useWindowSize';


describe('Testing contentWrapper <GenericCarousel />', () => {
    
    it('should GenericCarousel renders ok', () => {
        expect(() => shallow( <GenericCarousel arrows children={''} />)).not.toThrow();
    });

    it('should render 1 child and their parent is a div', () => {
        const wrapper = shallow(
            <GenericCarousel arrows>
                <h2 data-testid="carousel-item-1">Item 1</h2>
            </GenericCarousel>
        );
        expect(wrapper.find('h2').length).toEqual(1);
        expect(wrapper.find('h2').parent().type()).toEqual('div');
        expect(wrapper.find('[data-testid="carousel-content"]').children().find('h2')).toHaveLength(1);
    })
    
    it('should has className contentWrapper', () => {
        const wrapper = shallow(
            <GenericCarousel arrows>
                <h2 data-testid="carousel-item-1">Item 1</h2>
                <h2 data-testid="carousel-item-2">Item 2</h2>
                <h2 data-testid="carousel-item-3">Item 3</h2>
                <h2 data-testid="carousel-item-4">Item 4</h2>
                <h2 data-testid="carousel-item-5">Item 5</h2>
            </GenericCarousel>
        );
        wrapper.find('[data-testid="right-button"]').simulate('click');
        expect(wrapper.find('[data-testid="left-arrow-container"]').hasClass(styles.arrowsContainer)).toBeTruthy()
        expect(wrapper.find('[data-testid="left-arrow-container"]').hasClass(styles.leftArrow)).toBeTruthy()
        expect(wrapper.find('[data-testid="carousel-content-wrapper"]').hasClass(styles.carouselContentWapper)).toBeTruthy()
        expect(wrapper.find('[data-testid="carousel-wrapper"]').hasClass(styles.carouselWapper)).toBeTruthy();
        expect(wrapper.find('[data-testid="carousel-content"]').hasClass(styles.carouselContent)).toBeTruthy()
        expect(wrapper.find('[data-testid="carousel-content"]').hasClass(styles.show3)).toBeTruthy()
        expect(wrapper.find('[data-testid="right-arrow-container"]').hasClass(styles.arrowsContainer)).toBeTruthy()
        expect(wrapper.find('[data-testid="right-arrow-container"]').hasClass(styles.rightArrow)).toBeTruthy()
        expect(wrapper.find('[data-testid="first-mobile-item"]')).toHaveLength(0);
        expect(wrapper.find('[data-testid="first-mobile-item"]')).toHaveLength(0);
    });

    it('should move to right when click on right button and disable left button', () => {
        const wrapper = shallow(
            <GenericCarousel arrows>
                <h2 data-testid="carousel-item-1">Item 1</h2>
                <h2 data-testid="carousel-item-2">Item 2</h2>
                <h2 data-testid="carousel-item-3">Item 3</h2>
                <h2 data-testid="carousel-item-4">Item 4</h2>
            </GenericCarousel>
        );
        expect(wrapper.find('[data-testid="right-arrow-container"]').hasClass(styles.arrowsContainer)).toBeTruthy();
        wrapper.find('[data-testid="right-button"]').simulate('click');
        expect(wrapper.find('[data-testid="right-arrow-container"]')).toHaveLength(0);
    });

    it('should move to left when click on left button and disable right button', () => {
        const wrapper = shallow(
            <GenericCarousel arrows>
                <h2 data-testid="carousel-item-1">Item 1</h2>
                <h2 data-testid="carousel-item-2">Item 2</h2>
                <h2 data-testid="carousel-item-3">Item 3</h2>
                <h2 data-testid="carousel-item-4">Item 4</h2>
            </GenericCarousel>
        );
        wrapper.find('[data-testid="right-button"]').simulate('click');
        expect(wrapper.find('[data-testid="left-arrow-container"]').hasClass(styles.arrowsContainer)).toBeTruthy();
        wrapper.find('[data-testid="left-button"]').simulate('click');
        expect(wrapper.find('[data-testid="left-arrow-container"]')).toHaveLength(0);
    });

    it('should currentIndex change when fire useEffect', () => {
        const mock = jest.spyOn(React, 'useEffect');
        const wrapper = shallow(
            <GenericCarousel arrows>
                <h2 data-testid="carousel-item-1">Item 1</h2>
                <h2 data-testid="carousel-item-2">Item 2</h2>
                <h2 data-testid="carousel-item-3">Item 3</h2>
                <h2 data-testid="carousel-item-4">Item 4</h2>
                <h2 data-testid="carousel-item-5">Item 5</h2>
            </GenericCarousel>
        );
        wrapper.find('[data-testid="right-button"]').simulate('click');
        wrapper.find('[data-testid="right-button"]').simulate('click');
        expect(mock.mock.calls[1][1]).toContain(0)
        expect(mock.mock.calls[3][1]).toContain(1)
        expect(mock.mock.calls[5][1]).toContain(2)
    });

});

// Swipe gestures helpers
// more info https://hartzis.me/test-touch-events-react/
function createClientXY(x: number, y: number) {
    return { clientX: x, clientY: y };
};
function createStartTouchEventObject({ x = 0, y = 0 }) {
    return { touches: [createClientXY(x, y)] };
};
function createMoveTouchEventObject({ x = 0, y = 0}) {
    return { changedTouches: [createClientXY(x, y)] };
};

describe('test screen size behavior and swipe gestures of <GenericCarousel />', () => {
    it('should Mquery state set in true on mobile and set in false on desktop', () => {
        const setMqueryMkFn = jest.fn();
        const useEffectMk = jest.spyOn(React, 'useEffect');
        jest.spyOn(React, 'useState').mockReturnValue([true, setMqueryMkFn]);
        const useWindowsSizeMk = jest.spyOn(useWindowSize, 'useWindowSize').mockReturnValue({width: 700, height: 800});
        
        // Check mobile
        const wrapperMobile = mount(<GenericCarousel arrows children={''}/>);
        useEffectMk.mock.calls[0][0]();
        expect(setMqueryMkFn).toHaveBeenCalledWith(true);
        wrapperMobile.unmount();
        
        //Check desktop
        setMqueryMkFn.mockClear();
        useWindowsSizeMk.mockRestore();
        useWindowsSizeMk.mockReturnValue({width: 1000, height: 800});
        const wrapperDesktop = mount(<GenericCarousel arrows children={''}/>);
        useEffectMk.mock.calls[2][0]();
        expect(setMqueryMkFn).toHaveBeenCalledWith(false);
        wrapperDesktop.unmount();
    });

    it('should calculate when swiped', () => {
        jest.spyOn(React, 'useEffect');
        const setTouchPositionMkFn = jest.fn();
        jest.spyOn(React, 'useState').mockReturnValue([null, setTouchPositionMkFn]);

        const wrapper = mount(
            <GenericCarousel arrows>
                <h2>Item 1</h2>
                <h2>Item 2</h2>
                <h2>Item 3</h2>
                <h2>Item 4</h2>
                <h2>Item 5</h2>
            </GenericCarousel>
        );
        const contentWrapper = wrapper.find('[data-testid="carousel-content-wrapper"]')
        contentWrapper.simulate('touchStart', createStartTouchEventObject({ x: 100, y: 0 }));
        contentWrapper.simulate('touchMove',  createMoveTouchEventObject({ x: 150, y: 0 }));
        contentWrapper.simulate('touchStart', createStartTouchEventObject({ x: 200, y: 0 }));
        contentWrapper.simulate('touchMove',  createMoveTouchEventObject({ x: 250, y: 0 }));
        expect(setTouchPositionMkFn).toHaveBeenCalledTimes(4);
        wrapper.unmount();
    });
});