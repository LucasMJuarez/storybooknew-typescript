import React from 'react';
import ChartFooter from '.';
import {ChartFooterProps} from './ChartFooter';

export default {
    title: 'Carousel/Charts/CarouselCharts/ChartFooter',
    component: ChartFooter,
};

export const ChartFooterStory = (args: ChartFooterProps) => <ChartFooter {...args} />;

ChartFooterStory.args = {
    title: 'Datos de Test Drive',
    subtitle: "Vence 31 de ago '21, 00:40",
    rightArrow: true,
    onClick: () => alert('Click on Chart Footer!'),
    tabIndex: 0,
    onKeyPress: () => alert('Click on Chart Footer!'),
};
