import React from 'react'
import Customizations from './customizations'

export default function Display(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Customizations features={props.features} selected={props.selected} updateFeature={props.updateFeature} />
        </form>
    )
}