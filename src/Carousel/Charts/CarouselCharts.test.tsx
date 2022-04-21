/**
 * @jest-environment jsdom
 */
import React from 'react';
import {mount, shallow} from 'enzyme';
import CarouselCharts from './CarouselCharts';
import {Data} from './CarouselCharts';
import styles from './CarouselCharts.styles';
import * as useWindowSize from '../../utils/useWindowSize';
import CircularText from '../../Charts/CircularText';
import GenericCarousel from '../GenericCarousel';
import ChartFooter from './ChartFooter';
import ChartDynamicFooter from './ChartDynamicFooter';
import CarouselControl from '../CarouselControl';

const dataMock: Data[] = [
    {
        bottomText: 'de 10 GB',
        centerText: '10 GB',
        headerText: 'Te quedan',
        primaryProgress: 1,
        secondaryProgress: 1,
        size: 160,
        status: 'OK',
        title: 'Datos de Test Drive',
        subtitle: "Vence 31 de ago '21, 00:40",
        onClick: () => alert('Click me!'),
    },
    {
        bottomText: 'de 1.000 min',
        centerText: '700 min',
        headerText: 'Te quedan',
        primaryProgress: 0.7,
        secondaryProgress: 1,
        size: 160,
        status: 'OK',
        title: 'Minutos de Test Drive',
        subtitle: "Vence 15 de sep '21, 23:59",
        onClick: () => alert('Click me!'),
    },
    {
        bottomText: '',
        centerText: '8 GB',
        headerText: 'Te quedan',
        primaryProgress: 1,
        secondaryProgress: 1,
        size: 160,
        status: 'OK',
        title: 'Datos',
        subtitle: "Vence 15 de sep '21, 23:59",
        onClick: () => alert('Click me!'),
    },
    {
        bottomText: ' ',
        centerText: 'Ilimitados',
        headerText: ' ',
        primaryProgress: 0,
        secondaryProgress: 1,
        size: 160,
        status: 'OK',
        title: 'Minutos a Otras Compañías',
        subtitle: "Vence 15 de sep '21, 23:59",
        onClick: () => alert('Click me!'),
    },
    {
        bottomText: ' ',
        centerText: 'Ilimitados',
        headerText: ' ',
        primaryProgress: 0,
        secondaryProgress: 1,
        size: 160,
        status: 'OK',
        title: 'Minutos Movistar',
        subtitle: ' ',
        onClick: () => alert('Click me!'),
    },
];

describe('Testing contentWrapper <CarouselCharts />', () => {
    it('should CarouselCharts renders ok', () => {
        expect(() =>
            shallow(<CarouselCharts arrows={true} bullets={true} showFooter={true} data={dataMock} />)
        ).not.toThrow();
    });

    it('should render four components on desktop and its parent should be a div', () => {
        const wrapper = shallow(<CarouselCharts arrows={true} bullets={true} showFooter={true} data={dataMock} />);
        expect(wrapper.find(GenericCarousel).length).toEqual(1);
        expect(wrapper.find(CarouselControl).length).toEqual(1);
        expect(wrapper.find(CircularText).length).toEqual(5);
        expect(wrapper.find(ChartFooter).length).toEqual(5);
        expect(wrapper.find('[data-testid="circular-text-0"]').parent().type()).toEqual('div');
        expect(wrapper.find('[data-testid="chart-footer-0"]').parent().type()).toEqual('div');
        expect(wrapper.find('[data-testid="carousel-control"]').parent().type()).toEqual('div');
    });

    it('should has className carousel container', () => {
        const wrapper = shallow(<CarouselCharts arrows={true} bullets={true} showFooter={true} data={dataMock} />);
        expect(wrapper.find('[data-testid="carousel-container"]').hasClass(styles.carouselChartContainer)).toBeTruthy();
    });

    it('should render <ChartFooter/> and not render <ChartDynamicFooter/> if footer props are true in desktop mode', () => {
        const wrapper = shallow(<CarouselCharts arrows={true} bullets={true} showFooter={true} data={dataMock} />);
        expect(wrapper.find(ChartDynamicFooter).length).toEqual(0);
        expect(wrapper.find(ChartFooter).length).toEqual(5);
    });

    it('should render <CarouselControl/> if bullets props is true', () => {
        const wrapperWithBullets = shallow(
            <CarouselCharts arrows={true} bullets={true} showFooter={true} data={dataMock} />
        );
        expect(wrapperWithBullets.find(CarouselControl).length).toEqual(1);
        const wrapperWithoutBullets = shallow(
            <CarouselCharts arrows={true} bullets={false} showFooter={true} data={dataMock} />
        );
        expect(wrapperWithoutBullets.find(CarouselControl).length).toEqual(0);
    });

    it('should Mquery state set in true on mobile and set in false on desktop', () => {
        const setMqueryMkFn = jest.fn();
        const useEffectMk = jest.spyOn(React, 'useEffect');
        jest.spyOn(React, 'useState').mockReturnValue([true, setMqueryMkFn]);
        const useWindowsSizeMk = jest.spyOn(useWindowSize, 'useWindowSize').mockReturnValue({width: 700, height: 800});

        // Check mobile
        const wrapperMobile = mount(<CarouselCharts arrows={true} bullets={true} showFooter={true} data={dataMock} />);
        useEffectMk.mock.calls[0][0]();
        expect(setMqueryMkFn).toHaveBeenCalledWith(true);
        wrapperMobile.unmount();

        //Check desktop
        setMqueryMkFn.mockClear();
        useWindowsSizeMk.mockRestore();
        useWindowsSizeMk.mockReturnValue({width: 1000, height: 800});
        const wrapperDesktop = mount(<CarouselCharts arrows={true} bullets={true} showFooter={true} data={dataMock} />);
        useEffectMk.mock.calls[2][0]();
        expect(setMqueryMkFn).toHaveBeenCalledWith(false);
        wrapperDesktop.unmount();
    });

    it('should render <ChartDynamicFooter/> if Mquery state and footer props are true', () => {
        const setMqueryMkFn = jest.fn();
        const useEffectMk = jest.spyOn(React, 'useEffect');
        jest.spyOn(React, 'useState').mockReturnValue([true, setMqueryMkFn]);
        jest.spyOn(useWindowSize, 'useWindowSize').mockReturnValue({width: 700, height: 800});

        const wrapperMobile = mount(<CarouselCharts arrows={true} bullets={true} showFooter={true} data={dataMock} />);
        useEffectMk.mock.calls[0][0]();
        expect(setMqueryMkFn).toHaveBeenCalledWith(true);
        expect(wrapperMobile.find(ChartDynamicFooter).length).toEqual(1);
        wrapperMobile.unmount();

        const wrapperMobileWithoutFooter = mount(
            <CarouselCharts arrows={true} bullets={false} showFooter={false} data={dataMock} />
        );
        useEffectMk.mock.calls[2][0]();
        expect(wrapperMobileWithoutFooter.find(ChartDynamicFooter).length).toEqual(0);
        wrapperMobileWithoutFooter.unmount();
    });

    it('should render <CarouselControl/> with 1 bullet un mobile mode', () => {
        const setMqueryMkFn = jest.fn();
        jest.spyOn(React, 'useState').mockReturnValue([true, setMqueryMkFn]);
        jest.spyOn(useWindowSize, 'useWindowSize').mockReturnValue({width: 700, height: 800});
        const wrapper = mount(<CarouselCharts arrows={true} bullets={true} showFooter={true} data={dataMock} />);
        expect(wrapper.find(CarouselControl).prop('show')).toEqual(1);
        wrapper.unmount();
    });

    it('should render <CarouselControl/> with 3 bullets in desktop mode', () => {
        const setMqueryMkFn = jest.fn();
        jest.spyOn(React, 'useState').mockReturnValue([false, setMqueryMkFn]);
        jest.spyOn(useWindowSize, 'useWindowSize').mockReturnValue({width: 1000, height: 800});
        const wrapper = mount(<CarouselCharts arrows={true} bullets={true} showFooter={true} data={dataMock} />);
        expect(wrapper.find(CarouselControl).prop('show')).toEqual(3);
        wrapper.unmount();
    });
});
