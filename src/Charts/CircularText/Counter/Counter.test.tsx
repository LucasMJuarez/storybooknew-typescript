import {render, shallow} from 'enzyme';
import React from 'react';
import Counter from '.';
import CircularChart from './CircularChart/CircularChart';
import {STATUS_TO_COLORS} from './Counter';
import styles from './Counter.styles';

const Child = () => <h1>Hello! Im a children</h1>;
it('Counter renders ok with children', () => {
    expect(() => shallow(<Counter>Hehe</Counter>)).not.toThrow();
});

it('Counter renders CircularChart', () => {
    const wrapper = shallow(
        <Counter>
            <h1>hehe</h1>{' '}
        </Counter>
    );
    expect(wrapper.find(CircularChart).length).toEqual(1);
});

it('Counter renders the children passed and CircularChart is their parent', () => {
    const wrapper = shallow(
        <Counter>
            <Child />
        </Counter>
    );
    expect(wrapper.find(Child).length).toEqual(1);
    expect(wrapper.find(Child).parent().type()).toEqual(CircularChart);
});

it('Counter passes primary color when is no secondaryProgress and status "OK" is default', () => {
    const wrapper = shallow(<Counter>hehe</Counter>);
    expect(wrapper.find(CircularChart).prop('color')).toEqual(STATUS_TO_COLORS.OK.singlePrimary);
});

it('Counter passes multiplyPrimary color when is secondaryProgress and secondaryColor', () => {
    const wrapper = shallow(<Counter secondaryProgress={0.5}>hehe</Counter>);
    expect(wrapper.find(CircularChart).prop('color')).toEqual(STATUS_TO_COLORS.OK.multiplePrimary);
    expect(wrapper.find(CircularChart).prop('secondaryColor')).toEqual(STATUS_TO_COLORS.OK.multipleSecondary);
});

it('Counter passes their props to CircularChart', () => {
    const wrapper = shallow(
        <Counter size={33} isLoading={true} disableAnimation={true} inverseAnimation={true} hideProgress={true}>
            hehe
        </Counter>
    );
    expect(wrapper.find(CircularChart).prop('size')).toEqual(33);
    expect(wrapper.find(CircularChart).prop('isLoading')).toEqual(true);
    expect(wrapper.find(CircularChart).prop('disableAnimation')).toEqual(true);
    expect(wrapper.find(CircularChart).prop('inverseAnimation')).toEqual(true);
    expect(wrapper.find(CircularChart).prop('hideProgress')).toEqual(true);
});

it('Counter passes percentages * 100', () => {
    const wrapper = shallow(
        <Counter primaryProgress={0.4} secondaryProgress={0.7}>
            hehe
        </Counter>
    );
    expect(wrapper.find(CircularChart).prop('percentage')).toEqual(0.4 * 100);
    expect(wrapper.find(CircularChart).prop('secondaryPercentage')).toEqual(0.7 * 100);
});

it('Counter passes undefined secondaryPercentage when is not defined', () => {
    const wrapper = shallow(<Counter>hehe</Counter>);
    expect(wrapper.find(CircularChart).prop('secondaryPercentage')).toEqual(undefined);
});

it('Counter creates a wrapper with click listener when onClick prop is passed', () => {
    const spyOnClick = jest.fn();
    const wrapper = shallow(<Counter onClick={spyOnClick}>hehe</Counter>);
    wrapper.simulate('click');
    expect(spyOnClick).toBeCalled();
});

it('Counter dont creates a wrapper when onClick prop isnt passed', () => {
    const renderedWrapper = render(
        <Counter>
            <Child />
        </Counter>
    );
    expect(renderedWrapper.hasClass(styles.counterLinkWrapper)).toEqual(false);
});
