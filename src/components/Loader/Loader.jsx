import React from 'react'
import { Dna } from  'react-loader-spinner'
import css from './Loader.module.css'


export default function Loader () {
    return(
        <>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </>
    )
}