import React from "react";
import styles from './ModalParagraph.styles'

function ModalParagraph(props: {
    text: string;
}) {
    return(
        <div className={styles.container}>
            <span className={styles.text}>{props.text}</span>
        </div>
    );
}

export default ModalParagraph;