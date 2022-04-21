import * as React from 'react';
import styles from './Label.styles';

export type labelCategoryEnum = 'First' | 'Second' | 'Third' | 'Fourth' | 'Fifth' | 'Sixth' | 'Seventh';

function Label(props: { text: string; category: labelCategoryEnum }) {
    return <div className={`${styles.container} ${styles[props.category]} crossbrowser-width`}>{props.text}</div>;
}
export default Label;
