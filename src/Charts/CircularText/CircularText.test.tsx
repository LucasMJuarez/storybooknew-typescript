import React from 'react';
import {shallow} from 'enzyme';
import CircularText from '.';
import Counter from './Counter';
import Texts from '../../Resources/Charts/Circular/Text/Texts';
import {STATUS_TYPE} from './Counter/Counter';
import {TEXTS_LEVELS} from '../../Resources/Charts/Circular/Text/Texts/Texts';

it('CircularText renders ok', () => {
    expect(() => shallow(<CircularText centerText='Ilimitado' />)).not.toThrow();
});

it('CircularText renders a ./Counter and Resources/Charts/Circular/Text/Texts', () => {
    const wrapper = shallow(<CircularText centerText='Ilimitado' />);

    expect(wrapper.find(Counter).length).toEqual(1);
    expect(wrapper.find(Texts).length).toEqual(1);
});

it('CircularText pass props right', () => {
    const onClickSpy = jest.fn();
    const props = {
        primaryProgress: 11,
        size: 11,
        secondaryProgress: 11,
        status: 'OK' as STATUS_TYPE,
        disableAnimation: true,
        inverseAnimation: true,
        hideProgress: true,
        onClick: onClickSpy,
        isLoading: true,
        centerText: 'hehe',
        centerLevel: '28L' as TEXTS_LEVELS,
        headerText: 'hehe',
        bottomText: 'hehe',
    };
    const wrapper = shallow(<CircularText {...props} />);

    expect(wrapper.find(Counter).props()).toMatchObject({
        primaryProgress: props.primaryProgress,
        size: props.size,
        secondaryProgress: props.secondaryProgress,
        status: props.status,
        disableAnimation: props.disableAnimation,
        inverseAnimation: props.inverseAnimation,
        hideProgress: props.hideProgress,
        onClick: props.onClick,
        isLoading: props.isLoading,
        children: expect.anything(),
    });
    expect(wrapper.find(Texts).props()).toMatchObject({
        centerText: props.centerText,
        centerLevel: props.centerLevel,
        headerText: props.headerText,
        bottomText: props.bottomText,
    });
});
