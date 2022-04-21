import * as React from 'react';

function RadioOn(props: {id?: string; tabIndex?: number; ariaLabel?: string}) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='24'
            viewBox='0 0 26 24'
            tabIndex={props.tabIndex}
            aria-label={props.ariaLabel}
        >
            <g
                id={`ScreensOn_${props.id ? props.id : ''}`}
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
            >
                <g id={`GroupOn_${props.id ? props.id : ''}`} aria-hidden={true}>
                    <path
                        d='M0,12 C0,18.6 5.4,24 12,24 C18.6,24 24,18.6 24,12 C24,5.4 18.6,0 12,0 C5.4,0 0,5.4 0,12 Z'
                        id={`GreenShape_${props.id ? props.id : ''}`}
                        fill='#5BC500'
                        fillRule='nonzero'
                    ></path>
                    <path
                        d='M6,12 C6,15.3 8.7,18 12,18 C15.3,18 18,15.3 18,12 C18,8.7 15.3,6 12,6 C8.7,6 6,8.7 6,12 Z'
                        id={`Shape_${props.id ? props.id : ''}`}
                        fill='#FFFFFF'
                    ></path>
                </g>
            </g>
        </svg>
    );
}

export default RadioOn;
