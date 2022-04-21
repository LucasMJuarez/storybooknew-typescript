import {style} from 'typestyle';
import {colors} from '../../styles';

const styles: {[className: string]: string} = {
    no_disabled: style({
        transition: 'background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        height: 48,
        minWidth: '164px',
        borderBottom: '2px solid ' + colors.android_controls_tab_selected,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    disabled: style({
        transition: 'background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        height: 48,
        minWidth: '164px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }),
};

export default styles;
