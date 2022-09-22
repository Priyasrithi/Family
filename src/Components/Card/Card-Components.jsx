import React from 'react';
import './Card.style.css';

export const Card = props =>(
<div className='card-container'>
    <img alt='family' src={`https://robohash.org/${props.onefam.id}?set=set2&size=180x180`}></img>
    <h1>Name    : {props.onefam.name}</h1>
    <h2>Email   :{props.onefam.email}</h2>
    <h2>Website :{props.onefam.website}</h2>
</div>);