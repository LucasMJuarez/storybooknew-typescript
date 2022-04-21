import {style} from 'typestyle';

const styles = {
    container: style({
        padding: '8px 16px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                padding: '8px 20px',
            },
        },
    }),
    image: style({
        borderRadius: '4px',
        width: '100%',
        display: 'block',
    }),
};

export default styles;
