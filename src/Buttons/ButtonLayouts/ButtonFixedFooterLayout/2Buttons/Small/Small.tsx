import * as React from 'react';
import styles from './Small.styles';
import Primary from '../../../../Primary/Small/Small';
import Secondary from '../../../../Secondary/Small/Small';
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
    hideButton?: boolean;
};
function TwoButton(props: TwoButtonProps) {
    return (
        <div className={props.flexDire === true ? styles.contain : styles.container}>
            <Primary
                text={props.textPrimary}
                onClick={props.onClickPrimary}
                loading={props.loadingPrimary}
                inverse={props.inversePrimary}
                disabled={props.disablePrimary || props.disabled}
            />
            {props.hideButton ? null : (
                <Secondary
                    text={props.textSecondary}
                    onClick={props.onClickSecondary}
                    inverse={props.inverseSecondary}
                    disabled={props.disableSecondary || props.disabled}
                />
            )}
        </div>
    );
}

export default TwoButton;
