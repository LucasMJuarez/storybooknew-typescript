import React from 'react';
import ChartDynamicFooter from '.';
import {ChartDynamicFooterProps} from './ChartDynamicFooter';

export default {
    title: 'Carousel/Charts/CarouselCharts/ChartDynamicFooter',
    component: ChartDynamicFooter,
    argTypes: {
        currentIndex: {
            options: [0, 1, 2, 3, 4, 5],
            defaultValue: 0,
            control: {type: 'inline-radio'},
        },
    },
};

export const ChartDynamicFooterStory = (args: ChartDynamicFooterProps) => <ChartDynamicFooter {...args} />;

ChartDynamicFooterStory.args = {
    rightArrow: true,
    data: [
        {
            title: 'Datos de Test Drive',
            subtitle: "Vence 31 de ago '21, 00:40",
            onClick: () => alert('Hello!'),
        },
        {
            title: 'Minutos de Test Drive',
            subtitle: "Vence 15 de sep '21, 23:59",
            onClick: () => alert('Hello2!'),
        },
        {
            title: 'Datos',
            subtitle: "Vence 15 de sep '21, 23:59",
            onClick: () => alert('Hello3!'),
        },
        {
            title: 'Minutos a Otras Compañías',
            subtitle: "Vence 15 de sep '21, 23:59",
            onClick: () => alert('Hello3!'),
        },
        {
            title: 'Minutos Movistar',
            subtitle: '',
        },
        {
            title: 'Minutos SMS',
            subtitle: "Vence 15 de sep '21, 23:59",
        },
    ],
    tabIndex: 0,
    onKeyPress: () => alert('Click on Chart Footer!'),
};
