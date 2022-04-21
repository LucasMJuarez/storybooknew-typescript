import * as React from 'react';
import styles from './Title.styles';

function Title(props: {text: string; level: number; align: string; type: string}) {
    const noScriptText = props.text;

    return (
        <div
            className={styles.title[props.level][props.align][props.type]}
            dangerouslySetInnerHTML={{__html: noScriptText}}
        ></div>
    );
}

export default Title;
