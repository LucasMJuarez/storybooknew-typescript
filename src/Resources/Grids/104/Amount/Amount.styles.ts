import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles = {
    option: style({
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: `1px ${colors.android_backgrounds_background_cha_2} solid`,
        borderRadius: '4px',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        textDecoration: 'none',
        $nest: {
            '&:active': {
                borderColor: colors.android_charts_progress_chart_prog_2,
            },
            '&:hover': {
                userSelect: 'none',
                cursor: 'pointer',
            },
        },
    }),
    container: style({
        paddingTop: '100%',
        marginRight: 'initial',
        marginBottom: 'initial',
        width: '100%',
        height: 'initial',
        boxSizing: 'border-box',
        position: 'relative',
        display: 'inlineblock',
    }),
    text: style({
        fontWeight: 300,
        fontSize: '20px',
        lineHeight: 1.2,
        fontFamily: 'Roboto',
    }),
};

export default styles;
