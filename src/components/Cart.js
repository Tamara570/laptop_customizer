import React from 'react'
import Total from './totalCost'
import InCart from './inCart'


export default function Cart (props) {

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );

    return (
        <div>
            <h2>Your cart</h2>
            <InCart selected={props.selected} currency={props.currency} />
            <Total currency={props.currency} total={total} />
        </div>
    )
}