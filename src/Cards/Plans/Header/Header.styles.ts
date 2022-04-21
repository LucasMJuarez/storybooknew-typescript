import { style } from 'typestyle';

const styles = {
    container: style({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        height: 'auto',
        borderRadius: '8px 8px 0px 0px',
        background: '#00a9e0',
        width: 'auto'
    }),
    columnLeft: style({
        margin: '24px 0px 14px 16px',
        width: 'auto',
    }),
    columnRight: style({
        display: 'flex',
        justifyContent: 'right',
        marginTop: '28px',
        marginRight: '16px',
        width: 'auto',

    }),
    title: style({
        marginTop: '8px'
    }),
    titleHideLabel: style({
        marginTop: '24px'
    })

};

export default styles;