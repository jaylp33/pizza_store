import React from 'react'

export default function Pizza_Des({des}) {
    return (
        <div>
            <div className="des_circle">
                <h2>{des.num}</h2>
                <h4>{des.title}</h4>
            </div>
        </div>
    )
}
