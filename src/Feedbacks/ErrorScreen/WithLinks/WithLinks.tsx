import * as React from 'react';
import styles from './WithLinks.styles';
import NotificationKo from '../../../Assets/64/NotificationKo';
import Headline from '../../../TextCatalog/HEADLINE';
import Title from '../../../TextCatalog/TITLE';
import Link from '../../../Buttons/Link';

function WithLinks(props: {
    title: string;
    description: string;
    linksLabel?: string[];
    href?: string[];
    onClick: Function[];
    onKeyPress?: React.KeyboardEventHandler;
}) {
    const {linksLabel: links, onClick, href, onKeyPress} = props;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <NotificationKo />
                <h1 className={styles.title}>
                    <Headline text={props.title} level={3} align='Left' type='text_primary' />
                </h1>
                <Title text={props.description} level={1} align='Left' type='text_secondary' />
            </div>
            {links && href && (
                <div className={styles.buttonContainer}>
                    <div>
                        <Link text={links[0]} href={href[0]} onClick={onClick[0]} onKeyPress={() => onKeyPress} />
                    </div>
                    <div>
                        <Link text={links[1]} href={href[1]} onClick={onClick[1]} onKeyPress={() => onKeyPress} />
                    </div>
                    <div>
                        <Link text={links[2]} href={href[2]} onClick={onClick[2]} onKeyPress={() => onKeyPress} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default WithLinks;
