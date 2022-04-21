import * as React from 'react';
import styles from './TwoButton.styles';
import Primary from '../../../Primary';
import Secondary from '../../../Secondary';
export type TwoButtonProps = {
    textPrimary: string;
    textSecondary: string;
    onClickPrimary: Function;
    onClickSecondary: Function;
    loadingPrimary?: boolean;
    loadingSecondary?: boolean;
    inversePrimary?: boolean;
    inverseSecondary?: boolean;
    disablePrimary?: boolean;
    disableSecondary?: boolean;
    disabled?: boolean;
    flexDire?: boolean;
};
function TwoButton(props: TwoButtonProps) {

    return (
        <div className={props.flexDire ? styles.contain : styles.container}>
            <Primary
                text={props.textPrimary}
                onClick={props.onClickPrimary}
                loading={props.loadingPrimary}
                inverse={props.inversePrimary}
                disabled={props.disablePrimary || props.disabled}
            />
            <Secondary
                text={props.textSecondary}
                onClick={props.onClickSecondary}
                loading={props.loadingSecondary}
                inverse={props.inverseSecondary}
                disabled={props.disableSecondary || props.disabled}
            />
        </div>
    );
}

export default TwoButton;
