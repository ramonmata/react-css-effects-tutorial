import React from 'react'
import './Card.css'

export const FRONT_CARD_CLASS = 'card front'
export const BACK_CARD_CLASS = 'card back'

function FrontComponent(props) {
    return (
        <>
            <div className="logo"></div>
            <div className="company-text">{props.companyName}</div>
        </>
    )
}

function BackComponent(props) {
    return (
        <>
        <div className="left">
            <div className="name-text">{props.name}</div>
            <div className="role-text">{props.position}</div>
        </div>
        <div className="right">
            <div>{props.phone}</div>
            <div>{props.website}</div>
            <div>{props.email}</div>
            <div>{props.address}</div>
        </div>
        </>
    )
}

function Card(props) {
    const isFrontCard = props.className === FRONT_CARD_CLASS ? true : false
    const cardElements = isFrontCard ? <FrontComponent {...props} /> : <BackComponent {...props}/>
    return (
        <div className={props.className}>
            {cardElements}
        </div>
    )
}

export default Card