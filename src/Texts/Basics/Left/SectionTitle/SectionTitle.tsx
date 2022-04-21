import * as React from 'react';
import Title from '../../../../TextCatalog/TITLE';
import Headline from '../../../../TextCatalog/HEADLINE';
import styles from './SectionTitle.styles';

function SectionTitle(props: {
    text: string;
    tabIndex?: number;
    bold?: boolean,
    role?: string;
    isHeadline?: boolean;
}) {
    return (
        <h2 className={styles.container} tabIndex={props.tabIndex}>
            {props.isHeadline ?
                (props.bold ?
                    <Headline level={3} align='Left' type='text_primary_2_bold' text={props.text} />
                    :
                    <Headline level={3} align='Left' type='text_primary_2' text={props.text} />
                )
                :
                (!props.bold ? (
                    <Title level={1} align='Left' type='text_primary' text={props.text} />
                ) : (
                    <Title level={1} align='Left' type='text_primary_bold' text={props.text} />
                ))
            }
        </h2>
    );
};

export default SectionTitle;
