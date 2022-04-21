import React from 'react';
import {shallow} from 'enzyme';
import Contextual from './Contextual';
import Back from '../../../Assets/24/NavBar/Back';
import styles from './Contextual.styles';
import CloseInverse from '../../../Assets/24/NavBar/CloseInverse';
import NavBarTitle from '../../../Resources/NavBar/Left/NavBarTitle';

it('is truthy', () => {
    expect(Contextual).toBeTruthy();
});

it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<Contextual onBackButtonPress={() => {}} title='Yeaah' />);
    expect(wrapper.find(NavBarTitle).prop('text')).toEqual('Yeaah');
});

it('Dont have NavBarTitle when props.title are undefined', () => {
    const wrapper = shallow(<Contextual onBackButtonPress={() => {}} />);
    expect(wrapper.find(NavBarTitle).length).toEqual(0);
});

it('Back button have onClick property', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Contextual onBackButtonPress={mock} title='Yeaah' />);
    wrapper.find(Back).parent().simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
    wrapper.find(Back).parent().simulate('click');
    wrapper.find(Back).parent().simulate('click');
    expect(mock.mock.calls.length).toEqual(3);
});

it('CloseInverse button have onClick property', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Contextual onBackButtonPress={mock} title='Yeaah' isCloseButton={true} />);
    wrapper.find(CloseInverse).parent().simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
    wrapper.find(CloseInverse).parent().simulate('click');
    wrapper.find(CloseInverse).parent().simulate('click');
    expect(mock.mock.calls.length).toEqual(3);
});

it('hide back/close button when hideBackButton prop is true', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Contextual onBackButtonPress={mock} title='Yeaah' hideBackButton />);
    expect(wrapper.find(CloseInverse).length).toEqual(0);
    expect(wrapper.find(Back).length).toEqual(0);
});

it('Right button have correct styles', () => {
    const wrapper = shallow(
        <Contextual onBackButtonPress={() => {}} title='Yeaah' rightButtonText='Listo' disabledRightButton={false} />
    );
    const rightButtonStyles = styles.rightButton;
    expect(wrapper.children().last().props().className).toContain(rightButtonStyles);
});

it('Right button disabled have correct styles', () => {
    const wrapper = shallow(
        <Contextual onBackButtonPress={() => {}} title='Yeaah' rightButtonText='Listo' disabledRightButton={true} />
    );
    const rightButtonStyles = styles.disabledRightButton;
    expect(wrapper.children().last().props().className).toContain(rightButtonStyles);
});

it('When the right button is enabled can click', () => {
    const mock = jest.fn();
    const wrapper = shallow(
        <Contextual
            onBackButtonPress={() => {}}
            title='Yeaah'
            rightButtonText='Listo'
            disabledRightButton={false}
            onClickRightButton={mock}
        />
    );
    wrapper.find('Link').simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
});

it('When hide the right button dont rendering', () => {
    const wrapper = shallow(<Contextual onBackButtonPress={() => {}} title='Yeaah' />);
    expect(wrapper.find('Link')).toEqual({});
});

it('Nothing function on miss rightButtonOnClick', () => {
    expect(() => {
        const wrapper = shallow(<Contextual onBackButtonPress={() => {}} title='Yeaah' rightButtonText='Listo' />);
        wrapper.find('Link').simulate('click');
    }).not.toThrow();
});
