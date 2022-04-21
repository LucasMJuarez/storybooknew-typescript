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
    flexDirection?: boolean;
    tabIndexPrimary?: number;
    tabIndexSecondary?: number;
    ariaLabelPrimary?: string;
    ariaLabelSecondary?: string;
};
function TwoButton(props: TwoButtonProps) {
    return (
        <div className={styles.container}>
            <Primary
                text={props.textPrimary}
                onClick={props.onClickPrimary}
                loading={props.loadingPrimary}
                inverse={props.inversePrimary}
                disabled={props.disablePrimary || props.disabled}
                tabIndex={props.tabIndexPrimary}
                ariaLabel={props.ariaLabelPrimary}
            />
            <Secondary
                text={props.textSecondary}
                onClick={props.onClickSecondary}
                loading={props.loadingSecondary}
                inverse={props.inverseSecondary}
                disabled={props.disableSecondary || props.disabled}
                tabIndex={props.tabIndexSecondary}
                ariaLabel={props.ariaLabelSecondary}
            />
        </div>
    );
}

export default TwoButton;
