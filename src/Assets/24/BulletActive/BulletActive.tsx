import React from 'react'
import { colors } from '../../../styles';

export type BulletActiveProps = {
    isGreen?: boolean,
}

export default function BulletActive(props: BulletActiveProps) {
    const bulletColor = props.isGreen ? colors.movistar_green : colors.movistar_blue
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.224 12.123a.413.413 0 0 1 .62 0l2.793 3a.41.41 0 0 0 .62 0l6.904-7.482a.413.413 0 0 1 .62 0l1.09 1.197a.521.521 0 0 1 .002.685l-7.942 8.632c-.17.19-.506.345-.747.345h-.51c-.242 0-.578-.155-.748-.344l-3.8-4.133a.527.527 0 0 1 .001-.687l1.097-1.213z" fill={bulletColor} fillRule="nonzero" />
        </svg>
    )
}
