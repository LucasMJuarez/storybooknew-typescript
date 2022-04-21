import { style } from 'typestyle';

const styles = {
    container: style({
        display: 'grid',
        height: 'auto',
        gridTemplateColumns: '1fr',
        width: 'auto',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                height: 'auto',
                width: '647px',
                padding: '8px 16px'
            },
        },
    })
};

export default styles;
