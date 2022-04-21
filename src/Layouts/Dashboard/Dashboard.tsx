import React from 'react'
import Bottom16 from '../../Resources/Layout/Bottom16'

export default function Dashboard(props: { children: React.ReactNode; role?: string }) {
    return (
        <div role={props.role}>
            <Bottom16 />
                {props.children}
            <Bottom16 />
        </div>
    )
}


