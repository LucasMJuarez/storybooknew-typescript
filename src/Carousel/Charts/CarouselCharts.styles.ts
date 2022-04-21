import {style} from 'typestyle';

const styles = {
    carouselChartContainer: style({
        margin: "0 16px",
        $nest: {
            "@media only screen and (max-width: 767px)": {
                margin: 0
            }
        }
    })
};

export default styles;