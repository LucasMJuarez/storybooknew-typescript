import React from 'react';

export type Props = {
    onClick?: Function;
};

function LayoutDownloadInsvers({onClick}: Props) {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' onClick={() => onClick?.()}>
            <g transform='translate(4 2)' fill='#FFF' fillRule='evenodd'>
                <path d='M14.603 9.032c.79-.766.545-1.388-.57-1.388H12.03c-.552 0-.998-.455-.998-1V1A1 1 0 0 0 10.04 0H6.02a1 1 0 0 0-.992 1v5.645c0 .552-.444 1-1 1H2.033c-1.108 0-1.365.621-.575 1.387l5.848 5.673c.4.388 1.048.388 1.449 0l5.848-5.673z' />
                <rect y='18' width='16' height='2' rx='1' />
            </g>
        </svg>
    );
}

export default LayoutDownloadInsvers;
