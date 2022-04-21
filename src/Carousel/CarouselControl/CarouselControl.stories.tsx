import React from 'react';
import CarouselControl from '.';
import { CarouselControlProps } from './CarouselControl';

export default {
    title: 'Carousel/CarouselControl',
    component: CarouselControl,
    argTypes: {
        currentIndex: {
            defaultValue: 0,
            control: {
                type: 'range',
                min: 0,
                max: 8,
            },
        },
        show: {
            options: [1,2,3,4],
            defaultValue: 1,
            control: { type: 'inline-radio' }
        }    
    }
};

export const CarouselControlStory = (args: CarouselControlProps) => <CarouselControl {...args} />

CarouselControlStory.args = {
    size: 9,
};
