import { shallow } from 'enzyme';
import * as React from 'react';
import ModalTitle from '.';

const defaultProps = {
    text: "My title",
}

describe('Test for modal title component', () => {

    const wrapper = shallow(<ModalTitle {...defaultProps} />);

    it('is truthy', () => {
        expect(wrapper).toBeTruthy();
    });

    it('renders title component', () => {
        expect(wrapper.find('div').children().children().text()).toEqual(defaultProps.text);
    });
});