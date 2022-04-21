import React from 'react';
import {shallow} from 'enzyme';
import ThreeContainer from './ThreeContainer';
import Data_Negative from '../../../../Assets/48/Data_Negative'
import LandLine_Negative from '../../../../Assets/48/LandLine_Negative'
import Sms_Negative from '../../../../Assets/48/Sms_Negative'


it('is truthy', () => {
    expect(ThreeContainer).toBeTruthy();
});
it("Have text 'Example Component'", () => {
    const wrapper = shallow(<ThreeContainer>Example Component</ThreeContainer>);
    expect(wrapper.text()).toContain('Example Component');
});

it('Have all childrens', () => {
    const wrapper = shallow(
        <ThreeContainer>
            <Data_Negative />
            <LandLine_Negative />
            <Sms_Negative />
        </ThreeContainer>
    );
    expect(wrapper.find(Data_Negative).length).toEqual(1);
    expect(wrapper.find(LandLine_Negative).length).toEqual(1);
    expect(wrapper.find(Sms_Negative).length).toEqual(1);
});
