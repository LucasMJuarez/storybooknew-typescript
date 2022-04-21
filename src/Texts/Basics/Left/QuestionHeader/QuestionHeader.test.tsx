import React from 'react';
import {shallow} from 'enzyme';
import QuestionHeader from './QuestionHeader';

describe ('QuestionHeader tests', () => {
    it('is truthy', () => {
        expect(QuestionHeader).toBeTruthy();
    });
    it("Have text 'Yeaah'", () => {
        const wrapper = shallow(<QuestionHeader text='Yeaah' />);
        expect(wrapper.children().prop('text')).toContain('Yeaah');
    });
    it('has specific type', () => {
        const wrapper = shallow(<QuestionHeader text='Yeaah' type='text_primary' />);
        expect(wrapper.children().prop('type')).toContain('text_primary');
    })
})
