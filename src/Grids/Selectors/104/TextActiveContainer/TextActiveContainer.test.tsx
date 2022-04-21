import React from 'react';
import {shallow} from 'enzyme';
import TextActiveContainer from './TextActiveContainer';
import TextChild from '../../../../Resources/Grids/104/TextActive';

it('is truthy', () => {
    expect(TextActiveContainer).toBeTruthy();
});
it("Have text 'Example Component'", () => {
    const wrapper = shallow(<TextActiveContainer>Example Component</TextActiveContainer>);
    expect(wrapper.text()).toContain('Example Component');
});
it('Have all childrens', () => {
    const wrapper = shallow(
        <TextActiveContainer>
            <TextChild onClick={() => {}} amount={5} />
            <TextChild onClick={() => {}} amount={6} />
            <TextChild onClick={() => {}} amount={7} />
        </TextActiveContainer>
    );
    expect(wrapper.find(TextChild).length).toEqual(3);
});
