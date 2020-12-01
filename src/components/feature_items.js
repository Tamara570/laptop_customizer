import React from 'react'



const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }); 

export default function FeatureItems (props) {
    return (
        <div className="feature__item">
            <input
                type="radio"
                id={props.item.name}
                name={props.feature}
                className={props.featureClass}
                checked={props.featureClass.includes('feature__selected') ? true : false}
                onChange={e => props.handleUpdate(props.feature, props.item)}
        />
        <label htmlFor={props.item.name} className="feature__label">
            {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
        </label>
    </div>
    )
}