import * as React from 'react';

/**
 * @param checkboxColor must be and HEX color. e.g : '#5BC500'
 */
function Checkbox(props: { checkboxColor?: string }) {
    let fillColor = props.checkboxColor ? props.checkboxColor : "#5BC500";
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
            <g fill='none' fillRule='evenodd'>
                <g>
                    <g>
                        <g>
                            <path d='M0 0H24V24H0z' transform='translate(-24 -304) translate(0 240) translate(24 64)' />
                            <path
                                fill={fillColor}
                                fillRule='nonzero'
                                d='M6.224 11.623c.079-.09.191-.14.31-.14.118-.001.23.05.31.14l2.793 3c.078.091.191.143.31.143.118 0 .23-.052.31-.142L17.16 7.14c.079-.09.191-.141.31-.141.118 0 .23.051.31.14l1.09 1.198c.171.188.172.497.002.685l-7.942 8.632c-.17.19-.506.345-.747.345h-.51c-.242 0-.578-.155-.748-.344l-3.8-4.133c-.169-.197-.168-.49.001-.687l1.097-1.213z'
                                transform='translate(-24 -304) translate(0 240) translate(24 64)'
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Checkbox;
