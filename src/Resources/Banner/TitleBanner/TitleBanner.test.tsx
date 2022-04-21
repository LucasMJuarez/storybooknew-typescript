import React from 'react';
import {shallow} from 'enzyme';
import TitleBanner from '.';
import Sub from '../../../TextCatalog/SUB';

it('is truthy', () => {
    expect(TitleBanner).toBeTruthy();
});

it('Sould have Sub text', () => {
    const texto = 'Un Texto';

    const wrapper = shallow(<TitleBanner text={texto} />);
    expect(wrapper.find(Sub).props()).toEqual({level: 2, align: 'Left', type: 'text_primary', text: texto});
});
