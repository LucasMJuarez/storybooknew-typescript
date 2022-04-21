import {style} from 'typestyle'; 
import { colors } from '../../../styles';

const styles = {
    arrowBackground: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: colors.android_bars_primary_primary,
        border: 0,
        paddingTop: '1px',
        cursor: 'pointer',
        zIndex: 999,
    }),
};

export default styles;
