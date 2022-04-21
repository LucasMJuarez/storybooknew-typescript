import React from 'react';
import {shallow} from 'enzyme';
import Liquid from './';
import styles from './Liquid.styles';

it('is truthy', () => {
    expect(Liquid).toBeTruthy();
});
it("Sould have progress '50%'", () => {
    const percentage = '50%';
    const typeStyleClass = styles.progress(percentage);

    const wrapper = shallow(<Liquid progress={percentage}/>);

    expect(wrapper.children().children().props().className).toContain(typeStyleClass);
});
