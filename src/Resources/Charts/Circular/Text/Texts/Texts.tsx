import React from 'react';
import styles from './Texts.styles';
import Caption from '../../../../../TextCatalog/CAPTION';
import Display from '../../../../../TextCatalog/DISPLAY';
import Headline from '../../../../../TextCatalog/HEADLINE';
import Title from '../../../../../TextCatalog/TITLE';

export type TEXTS_LEVELS = '28L' | '24L' | '20L';

function Texts(props: {centerText: string; centerLevel?: TEXTS_LEVELS; headerText?: string; bottomText?: string}) {
    let Center = Display;

    if (props.centerLevel === '24L') {
        Center = Headline;
    } else if (props.centerLevel === '20L') {
        Center = Title;
    } else if (props.centerLevel === '28L') {
        Center = Display;
    }

    return (
        <div
            className={`${styles.container} ${!props.headerText && styles.topPlaceholder} ${
                !props.bottomText && styles.bottomPlaceholder
            }`}
        >
            {props.headerText && (
                <Caption level={1} align='Center' type='text_secondary_special_0' text={props.headerText} />
            )}
            <Center level={3} align='Center' type='text_primary_special_0' text={props.centerText} />
            {props.bottomText && (
                <Caption level={1} align='Center' type='text_secondary_special_0' text={props.bottomText} />
            )}
        </div>
    );
}

export default Texts;
