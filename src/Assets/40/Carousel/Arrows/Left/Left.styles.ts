import {style} from 'typestyle';
import {colors} from '../../../../../styles';

const styles = {
    arrowBackground: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: colors.grey_4,
        border: 0,
        paddingTop: '1px',
        cursor: 'pointer',
        zIndex: 999,
    }),
};

export default styles;
