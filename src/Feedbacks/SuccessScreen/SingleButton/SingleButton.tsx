import * as React from 'react';
import styles from './SingleButton.styles';
import NotificationOk from '../../../Assets/64/NotificationOk';
import NotificationOkPositive from '../../../Assets/64/NotificationOkPositive';
import Headline from '../../../TextCatalog/HEADLINE';
import Title from '../../../TextCatalog/TITLE';
import OneButton from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';
import {useWindowSize} from '../../../utils/useWindowSize';

function SingleButton(props: {title: string; description: string; buttonLabel: string; onClick: Function}) {
    const [headlineStyle, setHeadlineStyle] = React.useState('');
    const [titleStyle, setTitleStyle] = React.useState('');
    const [buttonInverse, setButtonInverse] = React.useState(false);
    const [iconInverse, setIconInverse] = React.useState(false);
    const size = useWindowSize();

    React.useEffect(() => {
        if (size && size.width <= 767) {
            setHeadlineStyle('text_primary_special_1');
            setTitleStyle('text_primary_special_1');
            setButtonInverse(true);
            setIconInverse(true);
        } else {
            setHeadlineStyle('text_primary');
            setTitleStyle('text_secondary');
            setButtonInverse(false);
            setIconInverse(false);
        }
    }, [size]);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} role='alert'>
                {iconInverse ? <NotificationOk /> : <NotificationOkPositive />}
                <h1 className={styles.title}>
                    <Headline text={props.title} level={3} align='Left' type={headlineStyle} />
                </h1>
                <Title text={props.description} level={1} align='Left' type={titleStyle} />
            </div>
            <div className={styles.buttonContainer}>
                <OneButton inverse={buttonInverse} text={props.buttonLabel} onClick={props.onClick} />
            </div>
        </div>
    );
}

export default SingleButton;
