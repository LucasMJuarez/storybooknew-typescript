import React from 'react';
import CarouselCharts from '.';
import {CarouselChartsProps} from './CarouselCharts';

export default {
    title: 'Carousel/Charts/CarouselCharts',
    component: CarouselCharts,
};

export const CarouselChartsStory = (args: CarouselChartsProps) => <CarouselCharts {...args} />;

CarouselChartsStory.args = {
    arrows: true,
    bullets: true,
    showFooter: true,
    data: [
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
            tabIndex: 0,
            onKeyPress: () => alert('Click me!'),
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
            tabIndex: 0,
            onKeyPress: () => alert('Click me!'),
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
            tabIndex: 0,
            onKeyPress: () => alert('Click me!'),
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
            tabIndex: 0,
            onKeyPress: () => alert('Click me!'),
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
            tabIndex: 0,
            onKeyPress: () => alert('Click me!'),
        },
        {
            bottomText: ' ',
            centerText: 'Ilimitados',
            headerText: ' ',
            primaryProgress: 0,
            secondaryProgress: 1,
            size: 160,
            status: 'OK',
            title: 'Minutos SMS',
            subtitle: "Vence 15 de sep '21, 23:59",
            onClick: () => alert('Click me!'),
            tabIndex: 0,
            onKeyPress: () => alert('Click me!'),
        },
        {
            bottomText: 'de 10 GB',
            centerText: '4.5 GB',
            headerText: 'Te quedan',
            primaryProgress: 0.45,
            secondaryProgress: 1,
            size: 160,
            status: 'WARNING',
            title: 'Chart de Advertencia',
            subtitle: "Vence 31 de ago '21, 00:40",
            onClick: () => alert('Click me!'),
            tabIndex: 0,
            onKeyPress: () => alert('Click me!'),
        },
        {
            bottomText: ' ',
            centerText: 'Ilimitados',
            headerText: ' ',
            primaryProgress: 1,
            secondaryProgress: 1,
            size: 160,
            status: 'UNLIMITED',
            title: 'Chart Ilimitado',
            subtitle: 'UNLIMITED',
            onClick: () => alert('Click me!'),
            tabIndex: 0,
            onKeyPress: () => alert('Click me!'),
        },
        {
            bottomText: 'de 10 GB',
            centerText: '2 GB',
            headerText: 'Te quedan',
            primaryProgress: 0.2,
            secondaryProgress: 0.2,
            size: 160,
            status: 'OVER_LIMIT',
            title: 'Chart de Bajo Recurso',
            subtitle: 'OVER_LIMIT',
            onClick: () => alert('Click me!'),
            tabIndex: 0,
            onKeyPress: () => alert('Click me!'),
        },
        {
            bottomText: 'de 10 GB',
            centerText: '0 GB',
            headerText: 'Te quedan',
            primaryProgress: 0,
            secondaryProgress: 0,
            size: 160,
            status: 'PLACEHOLDER',
            title: 'Chart de Neutro',
            subtitle: 'PLACEHOLDER',
            onClick: () => alert('Click me!'),
            tabIndex: 0,
            onKeyPress: () => alert('Click me!'),
        },
    ],
};
