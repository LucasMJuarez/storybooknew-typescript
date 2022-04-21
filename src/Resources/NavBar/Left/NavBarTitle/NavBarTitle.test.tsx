import React from 'react';
import {shallow} from 'enzyme';
import NavBarTitle from './NavBarTitle';
import Title from '../../../../TextCatalog/TITLE';

it('is truthy', () => {
    expect(NavBarTitle).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<NavBarTitle text='Yeaah' />);
    expect(wrapper.children().prop('text')).toEqual('Yeaah');
});
it('Text is TITLE/Title (18M)/∙ Left/text_navigation_bar_primary', () => {
    const wrapper = shallow(<NavBarTitle text='Yeaah' />);
    expect(wrapper.children().type()).toEqual(Title);
    expect(wrapper.children().prop('level')).toEqual(0);
    expect(wrapper.children().prop('align')).toEqual('Left');
    expect(wrapper.children().prop('type')).toEqual('text_navigation_bar_primary');
});
