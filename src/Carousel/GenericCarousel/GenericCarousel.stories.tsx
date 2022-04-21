import React from 'react';
import GenericCarousel from '.';
import { GenericCarouselProps } from './GenericCarousel';
import CircularText from '../../Charts/CircularText'


export default {
    title: 'Carousel/GenericCarousel',
    component: GenericCarousel,
};

const getIndex = (index: number): number => {
    return index;
}

export const GenericCarouselStory = (args: GenericCarouselProps) => (
<GenericCarousel {...args}>
        {childrens.map((item) => (
            <CircularText
                key={item}
                inverseAnimation={false}
                primaryProgress={0.3 + item}
                secondaryProgress={0.7}
                status={'OK'}
                disableAnimation={false}
                size={160}
                onClick={() => alert(`Chart ${item}`)}
                centerText={`Chart ${item}`}
            />
        ))}
</GenericCarousel>
);

GenericCarouselStory.args = {
    arrows: true
};

const childrens = [0,1,2,3,4,5];

