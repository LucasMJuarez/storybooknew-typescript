import React from 'react';
import styles from '../../../24/AlertInfoWhite/AlertInfoWhite.styles';

export type Props = {
    onClick?: Function;
};

function Refresh({onClick}: Props) {
    return (
        <svg width='22' height='22' viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg' onClick={() => onClick?.()}>
            <path
                d='M3.122 12.542a.75.75 0 0 1 .928.514 7.181 7.181 0 0 0 6.9 5.194c2.248 0 4.734-1.353 6.13-3.31l-.013.017H13.99a.75.75 0 0 1-.743-.648l-.007-.102a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 .75.75V19a.75.75 0 1 1-1.5 0l.001-3.119c-1.679 2.304-4.582 3.869-7.3 3.869a8.681 8.681 0 0 1-8.343-6.28.75.75 0 0 1 .514-.928zM11.05 2.25a8.681 8.681 0 0 1 8.342 6.28.75.75 0 1 1-1.442.414 7.181 7.181 0 0 0-6.9-5.194c-2.248 0-4.734 1.353-6.13 3.31l.012-.018H8.01a.75.75 0 0 1 .743.65l.007.1a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v3.117c1.68-2.303 4.582-3.867 7.3-3.867z'
                fill='#999'
                fillRule='nonzero'
            />
        </svg>
    );
}
export default Refresh;
