import React, {useEffect, useState} from 'react';
import styles from './ButtonLink.styles';
import Headline from '../../../TextCatalog/HEADLINE';
import NotificationInfo from '../../../Assets/64/NotificationInfo';
import NotificationInfoInverse from '../../../Assets/64/NotificationInfoInverse';
import Title from '../../../TextCatalog/TITLE';
import OneButton from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';
import {useWindowSize} from '../../../utils/useWindowSize';
import AssetId from '../../../Assets/64/Asset_Id';

function ButtonLink(props: {
    title: string;
    description: string;
    buttonLabel: string;
    onClick: Function;
    children?: any;
    terminosText?: string;
    onClickLink: Function;
    assetId?: boolean;
}) {
    const [headlineStyle, setHeadlineStyle] = useState('');
    const [titleStyle, setTitleStyle] = useState('');
    const [buttonInverse, setButtonInverse] = useState(false);
    const size = useWindowSize();

    useEffect(() => {
        if (size && size.width <= 767) {
            setHeadlineStyle('text_primary_special_1');
            setTitleStyle('text_primary_special_1');
            setButtonInverse(true);
        } else {
            setHeadlineStyle('text_primary');
            setTitleStyle('text_secondary');
            setButtonInverse(false);
        }
    }, [size]);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} role='alert'>
                {props.assetId ? <AssetId /> : <NotificationInfoInverse />}
                <h1 className={styles.title}>
                    <Headline text={props.title} level={3} align='Left' type={headlineStyle} />
                </h1>
                <Title text={props.description} level={1} align='Left' type={titleStyle} />
            </div>
            <div className={styles.childrenContainer}>{props.children}</div>
            <div className={styles.wrapperButtonLink}>
                <div className={styles.buttonContainer}>
                    <OneButton inverse={buttonInverse} text={props.buttonLabel} onClick={props.onClick} />
                </div>

                <span onClick={() => props.onClickLink()} className={styles.footerContainer}>
                    {props.terminosText}
                </span>
            </div>
        </div>
    );
}

export default ButtonLink;
