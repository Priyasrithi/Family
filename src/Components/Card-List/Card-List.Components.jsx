import React from 'react';
import './Card-List.style.css';
import {Card} from '../Card/Card-Components';

export const CardList = props =>(
<div  className = 'Card-List'>
         {props.family.map(fam => (
    <Card key={fam.id} onefam={fam}></Card>
   
  ))}</div> 
); 