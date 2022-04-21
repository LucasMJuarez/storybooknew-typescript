import React, { MouseEventHandler } from 'react';
import Sub from '../../../TextCatalog/SUB';
import styles from './Feedback.styles';

export type FeedbackProps = {
    text: string,
    onClick: Function,
    tabIndex?: number,
    disabled?: boolean,
}

const Feedback = (props: FeedbackProps) => {
    return (
        <div
            className={props.disabled ? styles.link_disabled : styles.link}
            onClick={() => props.onClick()} 
            tabIndex={props.tabIndex}>
            <Sub
                text={props.text}
                level={2}
                align={'Left'}
                type={props.disabled ? 'text_link_disabled' : 'text_link'}
            />
        </div>
    )
}

export default Feedback;