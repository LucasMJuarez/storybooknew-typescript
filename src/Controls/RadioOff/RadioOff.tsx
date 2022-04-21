import * as React from 'react';

function RadioOff(props: {class?: string; tabIndex?: number; ariaLabel?: string}) {
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
                className={`ScreensOff_${props.class ? props.class : ''}`}
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
            >
                <g
                    className={`GroupOff_${props.class ? props.class : ''}`}
                    transform='translate(-1.000000, -1.000000)'
                    fill='#DDDDDD'
                    fillRule='nonzero'
                    aria-hidden={true}
                >
                    <g
                        className={`-icn-radio-inactive_${props.class ? props.class : ''}`}
                        transform='translate(1.000000, 1.000000)'
                        aria-hidden={true}
                    >
                        <path
                            d='M1,11 C1,16.5237031 5.47667235,21 11,21 C16.5237031,21 21,16.5233276 21,11 C21,5.47629686 16.5233276,1 11,1 C5.47629686,1 1,5.47667235 1,11 Z M0,11 C0,4.92486775 4.923532,0 11,0 C17.0751322,0 22,4.923532 22,11 C22,17.0751322 17.076468,22 11,22 C4.92486775,22 0,17.076468 0,11 Z'
                            className={`icn-checkbox-inactive_${props.class ? props.class : ''}`}
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default RadioOff;
