import React, {useEffect, useState} from "react";


export function PriceListItem (props){
    const price = props.price;
    /*let res = price.map(function (p) {
        return <li key={p._id}>{p.title}</li>
        <li>{p.price}</li>

    })*/

return (
    <ul className="gridServices">
        <li>Назва послуги</li>
        <li>Вартість</li>
        <li>Назва послуги</li>
        <li>Вартість</li>
        <li>{price.title}</li>
        <li>{price.price}</li>

      {/*  {
    price.map((p) =>

            <li key={p.id}>{p.title} </li>
        <li>{p.price} </li>

    )
        }*/}
    </ul>

)
}
