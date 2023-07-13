import React from 'react';
import css from './Button.module.css'

export default function Button ({ onClick , ref }) {
    return (
        <>
            <button className={css.button} type='button' onClick={onClick} ref={ref}>Load more</button>
        </>
    )
}