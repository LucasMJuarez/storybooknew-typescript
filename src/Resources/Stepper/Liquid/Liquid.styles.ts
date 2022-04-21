import { style } from 'typestyle'
import { colors } from '../../../styles';

const styles = {
    progressBackground: style({
        width: '100%',
        height: '8px',
        borderRadius: '4px',
        backgroundColor: colors.android_backgrounds_background_alter,
    }),

    progress(progress: string) {
     
        return style({
            width: progress,
            height: '8px',
            borderRadius: '4px',
            backgroundColor: colors.android_charts_progress_chart_prog_2
        })
    }
}

export default styles;