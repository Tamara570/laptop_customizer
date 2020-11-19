import React from 'react'
import Total from './totalCost'
import inCart from './inCart'


export default function Cart (props) {

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );

    return (
        <div>
            <h2>Your cart</h2>
            <inCart selected={props.selected} currency={props.currency} />
            <Total currency={props.currency} total={total} />
        </div>
    )
}