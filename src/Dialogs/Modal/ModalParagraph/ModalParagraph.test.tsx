import { shallow } from 'enzyme';
import * as React from 'react';

import ModalParagraph from '.';

const defaultProps = {
    text : "My paragraph",
}

describe('Test for modal paragraph component', () => {

    const wrapper = shallow(<ModalParagraph {...defaultProps} />);
    
    it('is truthy', () => {
        expect(wrapper).toBeTruthy();
    });

    it('renders paragraph component', () => {
        expect(wrapper.find('div').find('span').children().text()).toEqual(defaultProps.text);
    });
});