import * as React from 'react';
import Headline from '../../../../TextCatalog/HEADLINE';
import styles from './QuestionHeader.styles';

export type QuestionHeaderProps = {
    text: string;
    type?: string;
}

function QuestionHeader(props: QuestionHeaderProps) {
    const typeStyle = props.type ? props.type : 'text_primary_special_1';
    return (
        <div className={styles.container}>
            <Headline text={props.text} level={3} align='Left' type={typeStyle} />
        </div>
    );
}

export default QuestionHeader;
