import { style } from 'typestyle';
import { colors } from '../../../styles';

const styles = {
    wrapper: style({
        padding: ' 14px 24px ',
        borderRadius: '4px',
        backgroundColor: colors.grey_0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    button: style({
        padding: '0',
        margin: '0',
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        cursor: 'pointer',
    }),

};

export default styles;
