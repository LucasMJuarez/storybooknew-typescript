import { style } from 'typestyle';
import { colors } from '../../../../styles'

const infoButtonheight = 80;
const fullWidthComponentPadding = 8;

const styles: { [className: string]: string } = {
    container: style({
        width: '100%',
        height: infoButtonheight.toString() + 'px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundColor: colors.white,
        borderTop: '1px solid ' + colors.grey_3,
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                border: 'none',
                display: 'grid',
                gridTemplateColumns: '1fr',
                width: '200px',
                position: 'unset',
                bottom: 'unset',
                left: 'unset',
            },
        },
    }),
    footerMobile: style({
        height: (infoButtonheight - fullWidthComponentPadding).toString() + 'px',
        width: '100%',
        display: 'none',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                display: 'block',
            },
        },
    }),
    left_column: style({
        padding: '16px 0px 16px 16px',
        width: 'auto',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                padding: '21px 0px 0px 0px',
            },
        },
    }),
    top_row: style({
        textAlign: 'start',
        width: 'fit-content',
        paddingBottom: '6px',
    }),
    bottom_row: style({
        display: 'flex',
        width: 'fit-content',
        flexDirection: 'row',
        alignItems: 'flex-end',
    }),
    bottom_row_left_column: style({
        paddingLeft: '1px',
    }),
    bottom_row_right_column: style({
        paddingLeft: '4px',
    }),
    right_column: style({
        width: 'auto',
        padding: '16px 0px',
        display: 'flex',
        marginRight: '16px',
        justifyContent: 'end',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                padding: '15px 0px 0px 0px',
                display: 'block'
            },
        },
    }),
    mobilePrice: style({
        display: 'block',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                display: 'none',
            },
        },
    }),
    desktopPrice: style({
        display: 'block',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                display: 'none',
            },
        },
    }),
};

export default styles;