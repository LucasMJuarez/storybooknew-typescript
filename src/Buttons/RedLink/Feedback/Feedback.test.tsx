import * as React from 'react';
import { shallow } from 'enzyme';
import Feedback from '.';
import { FeedbackProps } from './Feedback';
import Sub from '../../../TextCatalog/SUB';

const mockFn = jest.fn();
describe('Testing component <CarouselControl />', () => {
    let myProps: FeedbackProps;
    beforeEach(() => {
        myProps = {
            text: 'Texto del feedback.',
            onClick: mockFn,
            tabIndex: 1,
        };
    });
    it('renders Sub', () => {
        const wrapper = shallow(<Feedback {...myProps} />);
        expect(wrapper.find(Sub).length).toBe(1);
    });

    it('renders text style in normal state', () => {
        const wrapper = shallow(<Feedback {...myProps} />);
        expect(wrapper.find(Sub).props().type).toEqual('text_link');
    });
    
    it('renders with tab index value', () => {
        const wrapper = shallow(<Feedback {...myProps} />);
        expect(wrapper.props().tabIndex).toEqual(1);
    });
    
    it('was clicked', () => {
        const wrapper = shallow(<Feedback {...myProps} />);
        expect(mockFn).toHaveBeenCalledTimes(0);
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
