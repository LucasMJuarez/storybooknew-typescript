import React from 'react';
import styles from './WithHighlightOffer.styles';

function WithHighlightOffer(props: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default WithHighlightOffer;