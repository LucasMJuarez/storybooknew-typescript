import { style } from 'typestyle';

const styles = {
    container: style({
        padding: '8px 16px',
    }),
    box: style({
        position: 'relative',
        height: "60px",
        padding: '16px 15px 16px 16px',
        borderRadius: '4px',
        border: 'solid 1px grey',
        backgroundColor: 'white'
    }),
    right: style({
        position: 'absolute',
        right: '16px',
        top: '28px'
    })
}

export default styles;
