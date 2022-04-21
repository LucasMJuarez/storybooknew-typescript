import React from 'react';
import {shallow} from 'enzyme';
import AmountContainer from './AmountContainer';
import AmountChild from '../../../../Resources/Grids/104/Amount';

it('is truthy', () => {
    expect(AmountContainer).toBeTruthy();
});
it("Have text 'Example Component'", () => {
    const wrapper = shallow(<AmountContainer>Example Component</AmountContainer>);
    expect(wrapper.text()).toContain('Example Component');
});
it('Have all childrens', () => {
    const wrapper = shallow(
        <AmountContainer>
            <AmountChild onClick={() => {}} amount={50} />
            <AmountChild onClick={() => {}} amount={60} />
            <AmountChild onClick={() => {}} amount={70} />
        </AmountContainer>
    );
    expect(wrapper.find(AmountChild).length).toEqual(3);
});
