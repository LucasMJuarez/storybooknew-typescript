import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'grid',
        padding: '0px 16px',
        gap: '16px',
        gridGap: '16px',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr',
        $nest: {
            '@media only screen and (min-width: 496px)': {
                gridTemplateColumns: 'repeat(auto-fill, 104px)',
                gridTemplateRows: 'repeat(auto-fill, 104px)',
            },
        },
    }),
};

export default styles;
