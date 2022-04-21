import { style } from 'typestyle';
import { colors } from '../../styles';

const styles = {
    componentNotSelected: style({
        backgroundColor: colors.white,
        borderRadius: '16px',
        border: 'solid  1.5px ' + colors.grey_3,
        display: 'flex',
        float: 'left',
        margin: '8px 2px 16px 0px',
        cursor: 'pointer',
        $nest: {
            '@media only screen and (min-width: 340px)': {
                margin: '8px 8px 16px 0px',
            },
        },
    }),
    componentIsSelected: style({
        backgroundColor: colors.white,
        borderRadius: '16px',
        border: 'solid  1.5px ' + colors.movistar_green,
        display: 'flex',
        float: 'left',
        margin: '8px 2px 16px 0px',
        cursor: 'pointer',
        $nest: {
            '@media only screen and (min-width: 340px)': {
                margin: '8px 8px 16px 0px',
            },
        },
    }),
    svg: style({
        display: 'flex',
        padding: '8px 0px 8px 8px',
    }),
    textWithIcon: style({
        margin: '6px 5px',
        $nest: {
            '@media only screen and (min-width: 340px)': {
                margin: '6px 16px 6px 8px',
            },
        },
    }),
    textWithoutIcon: style({
        margin: '6px 16px'
    }),
};

export default styles;