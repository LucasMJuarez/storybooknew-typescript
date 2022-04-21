import { style } from 'typestyle';

const styles = {
    component: style({
        display: 'flex',
        justifyContent: 'center',
    }),
    container: style({
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '460px',
    }),
    illustration: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '13px 0px 16px 0px'
    }),
    title: style({
        margin: '16px 24px 23px 24px',
        maxWidth: '420px'
    }),
    items: style({
        margin: '0px 16px'
    }),
};

export default styles;
