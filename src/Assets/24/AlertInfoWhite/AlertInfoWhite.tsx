import * as React from 'react';
import styles from './AlertInfoWhite.styles';

export type Props = {
    background?: boolean;
    onClick?: Function;
};

function AlertInfoWhite({background, onClick}: Props) {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => onClick?.()}
            className={background ? styles.arrowBackground : ''}
        >
            <g fill='none' fillRule='evenodd'>
                <path fill='#00A9E0' d='M-320-16H40v56h-360z' />
                <path d='M-112-16H40v56h-152z' />
                <path
                    d='M12 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 5c-.828 0-1.5.717-1.5 1.6v4.8c0 .885.672 1.6 1.5 1.6s1.5-.717 1.5-1.6v-4.8c0-.883-.672-1.6-1.5-1.6zm0-10C5.383 0 0 5.383 0 12c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12zm0 22c-5.52-.005-9.995-4.48-10-10 .005-5.52 4.48-9.995 10-10 5.52.005 9.995 4.48 10 10-.005 5.52-4.48 9.995-10 10z'
                    fill='#FFF'
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
}

export default AlertInfoWhite;
