import React from "react";
import styles from "./ModalTitle.styles";

function Title(props: {
    text: string;
}) {
    return (
        <div className={styles.container}>
            <div className={styles.text}>{props.text}</div>
        </div>
    );
}

export default Title;