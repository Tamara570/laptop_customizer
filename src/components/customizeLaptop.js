import React from 'react'
import Customization from './Customization'

export default function Display(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Customization features={props.features} selected={props.selected} handleUpdate={props.handleUpdate} />
        </form>
    )
}