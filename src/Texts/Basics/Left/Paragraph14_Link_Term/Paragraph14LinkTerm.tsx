import * as React from 'react';
import styles from './Paragraph14LinkTerm.styles';
import stylesSub from '../../../../TextCatalog/SUB/Sub.styles';

type Props = {
    text: string;
    type?: string;
    href?: string;
    textLink?: string;
    openExternalLink?: boolean
};

function Paragraph14LinkTerm({ text, type = 'text_secondary', href, textLink, openExternalLink }: Props) {
    return (
        <div className={styles.container + ' ' + stylesSub.sub[1]['Left'][type]}>
            <span dangerouslySetInnerHTML={{ __html: text }} />
            <a className={styles.link} target={openExternalLink ? '_blank' : '_self'} href={href}>{' ' + textLink}</a>
        </div>
    );
}

export default Paragraph14LinkTerm;
