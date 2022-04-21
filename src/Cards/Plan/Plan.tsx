import React from 'react';
import styles from './Plan.styles';
import Tag from '../../Labels/Background/Tag';
import Headline from '../../TextCatalog/HEADLINE/Headline';
import Body from '../../TextCatalog/BODY/Body';

export const MovistarImg = () => {
    let {imgMovistar} = styles;
    return (
        <svg xmlns='http://www.w3.org/2000/svg' className={imgMovistar} viewBox='0 0 995 772' fill='#002d45'>
            <path
                fill='#15B0E2'
                fillRule='nonzero'
                d='M16.977 280.976C.044 353.69-6.5 429.482 7.994 519.7c13.367 83.215 37.051 155.035 53.012 194.614 5.502 13.64 14.021 27.861 20.61 36.615 18.938 25.173 50.471 23.562 63.719 16.705 14.446-7.475 31.042-25.52 25.032-66.729-2.901-19.904-11.276-49.026-15.993-65.22-14.465-49.675-33.723-109.613-35.401-152.313-2.245-57.112 19.174-64.587 33.403-67.879 23.92-5.531 43.982 22.078 63.033 56.69 22.734 41.302 61.71 114.495 93.497 170.394 28.697 50.463 81.66 104.491 166.708 100.784 86.71-3.774 150.621-38.553 183.549-148.04 24.633-81.915 41.431-143.12 68.455-205.806 31.074-72.084 72.526-110.665 107.431-98.884 32.409 10.933 40.496 44.235 40.889 93.188.344 43.3-4.42 91.032-8.129 126.1-1.346 12.726-3.78 38.326-2.784 52.544 1.957 27.938 13.466 55.847 43.394 60.31 31.885 4.757 57.465-22.027 67.68-54.4 4.03-12.767 7.467-32.299 9.322-46.153 9.37-69.965 11.803-117 7.575-188.588-4.946-83.717-20.525-160.06-47.715-226.124C919.276 44.331 877.496 3.836 823.915.26 764.604-3.7 696.545 37.672 660.84 117.93c-32.913 73.978-59.242 149.927-75.213 188.688-16.205 39.314-40.006 63.534-76.609 67.585-44.758 4.951-83.31-29.203-111.557-77.892-24.625-42.453-73.422-123.268-99.533-150.427-24.528-25.506-52.545-57.437-110.875-56.464-46.103.768-131.204 24.67-170.077 191.556z'
            />
        </svg>
    );
};

export type Props = {
    title: string;
    description?: string;
    tags?: string[];
    maxTags?: number;
    onClick?: Function;
    tabIndex?: number;
    role?: string;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
};

function Plan({title, description, tags, maxTags = 2, onClick, tabIndex, role, ariaLabel, onKeyPress}: Props) {
    let {cardWrapper, card, container, wrapperImg, tagWrapper} = styles;

    return (
        <div className={cardWrapper}>
            <div
                data-testid='card-wrapper'
                className={card}
                onClick={() => onClick?.()}
                tabIndex={tabIndex}
                role={role}
                aria-label={ariaLabel}
                onKeyPress={onKeyPress || function () {}}
            >
                <div className={wrapperImg}>
                    <MovistarImg />
                </div>
                <div className={container}>
                    <div>
                        <Headline text={title} level={4} align='Left' type='text_primary_inverse' />
                        {description && <Body text={description} level={1} align='Left' type='text_primary_inverse' />}
                    </div>

                    {tags && (
                        <div className={tagWrapper}>
                            {tags.slice(0, maxTags).map((e, index) => (
                                <Tag text={e} key={index} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Plan;
