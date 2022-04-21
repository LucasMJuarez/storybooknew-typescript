import React from 'react';
import Sub from '../../../../../TextCatalog/SUB';
import styles from './Alternative.styles';

const Icon = () => {
    let random = Math.floor(Math.random() * 1000) + 1;
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='8'
            height='8'
            viewBox='0 0 8 8'
        >
            <defs>
                <path id={`sxzx74t07a${random}`} d='M4 7c1.657 0 3-1.343 3-3S5.657 1 4 1 1 2.343 1 4s1.343 3 3 3z' />
            </defs>
            <g fill='none' fillRule='evenodd'>
                <g>
                    <path fill='#FFF' d='M0 0H360V32H0z' transform='translate(-16.000000, -12.000000)' />
                    <g transform='translate(-16.000000, -12.000000) translate(16.000000, 12.000000)'>
                        <use fill='#00A9E0' fillRule='nonzero' xlinkHref={`#sxzx74t07a${random}`} />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default function Alternative(props: {primaryText: string; tabIndex?: number}) {
    return (
        <div className={styles.container} tabIndex={props.tabIndex}>
            <div className={styles.iconContainer}>
                <Icon />
            </div>
            <div>
                <Sub text={props.primaryText} level={1} align='Left' type='text_secondary' />
            </div>
        </div>
    );
}
