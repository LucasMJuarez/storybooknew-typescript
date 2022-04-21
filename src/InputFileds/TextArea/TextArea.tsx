import React from 'react';
import Refresh from '../../Assets/22/NavBar/Refresh';
import styles from './TextArea.styles'

export type Props = {
    onClick?: Function;
    children: any
};

const TextArea = ({onClick, children}: Props) => {
    return (
        <>
            <div data-test={'text-area-component'} className={styles.backgroundInput}>
                {children}
                <div className={styles.refreshIcon}>

                <Refresh onClick={onClick}/>
                </div>
            </div>
            
        </>
    );
};

export default TextArea;
