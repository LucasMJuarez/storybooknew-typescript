import * as React from 'react';
import Checkbox from '../../../Controls/Checkbox';
import styles from "./BulletOneRowLinkTerm.styles";
import { colors } from '../../../styles';
import stylesSub from '../../../TextCatalog/SUB/Sub.styles';

export type BulletOneRowLinkTermProps = {
    text: string
    checkboxColor?: string;
    type?: string;
    href?: string;
    textLink?: string;
    openExternalLink?: boolean
}

const BulletOneRowLinkTerm = (props: BulletOneRowLinkTermProps) => {
    const checkBoxColor = props.checkboxColor ? props.checkboxColor : colors.movistar_green;
    return (
        <div className={styles.container}>
            <div className={styles.checkBox}>
                <Checkbox checkboxColor={checkBoxColor} />
            </div>
            <div className={styles.text + ' ' + stylesSub.sub[1]['Left']['text_primary']} >
                <span dangerouslySetInnerHTML={{ __html: props.text }} />
                <a className={styles.link} target={props.openExternalLink ? '_blank' : '_self'} href={props.href}>{' ' + props.textLink}</a>
            </div>
        </div>
    );
}

export default BulletOneRowLinkTerm;