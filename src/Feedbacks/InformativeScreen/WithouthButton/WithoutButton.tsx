import * as React from 'react';
import styles from './WithoutButton.styles';
import Headline from '../../../TextCatalog/HEADLINE';
import Title from '../../../TextCatalog/TITLE';
import {useWindowSize} from '../../../utils/useWindowSize';
import Loading from '../../../Resources/Buttons/Primary/Loading';

function WithoutButton(props: {title: string; description: string; loading: boolean}) {
    const [headlineStyle, setHeadlineStyle] = React.useState('');
    const [titleStyle, setTitleStyle] = React.useState('');
    const [inverse, setInverse] = React.useState(false);

    const size = useWindowSize();

    let navigatorProduct: boolean = false;

    if (typeof navigator != 'undefined' && navigator.product == 'ReactNative') {
        navigatorProduct = true;
    }

    React.useEffect(() => {
        if (size && size.width <= 767) {
            setHeadlineStyle('text_primary_special_1');
            setTitleStyle('text_primary_special_1');
            setInverse(true);
        } else {
            setHeadlineStyle('text_primary');
            setTitleStyle('text_secondary');
            setInverse(false);
        }
    }, [size]);

    return (
        <div className={navigatorProduct ? styles.containerApp : styles.containerWeb}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    <Headline text={props.title} level={3} align='Left' type={headlineStyle} />
                </h1>
                <div className={styles.description}>
                    <Title text={props.description} level={1} align='Left' type={titleStyle} />
                </div>
            </div>
            {props.loading && (
                <div className={styles.spinnerContainer}>
                    <Loading inverse={inverse} blue />
                </div>
            )}
        </div>
    );
}

export default WithoutButton;
