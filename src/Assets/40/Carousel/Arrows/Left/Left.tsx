import * as React from 'react';
import styles from './Left.styles'

export type Props = {
    background?: boolean;
    onClick?: Function;
};

function Left({ background, onClick }: Props) {
    return (
        <svg 
            onClick={() => onClick?.()} 
            className={background ? styles.arrowBackground : ''} 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" height="32" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <g fill="#999" fillRule="nonzero">
                    <g>
                        <g>
                            <g>
                                <path d="M8.5 11.55l5-5.05c.34-.33.87-.33 1.2 0 .33.34.33.88 0 1.2l-4.18 4.25 4.18 4.23c.33.33.33.87 0 1.2-.34.34-.87.34-1.2 0l-5-5.04c-.2-.2-.2-.57 0-.8z" transform="rotate(0 12 12)"/>                                
                            </g> 
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Left;
