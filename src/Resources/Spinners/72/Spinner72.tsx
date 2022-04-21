import React from 'react';
import styles from './Spinner.styles';
import Spinner from '../Spinner';

function Spinner72(props: { inverse?: boolean }) {

    return (
        <div className={styles.spinnerContainer}>
            <Spinner size={44} inverse={props.inverse ? true : false} />
        </div>
    )

}

export default Spinner72;
