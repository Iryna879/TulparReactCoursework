import React, {useEffect, useState} from "react";
import ReactDataGrid from "react-data-grid";

export function PriceListItem (props){
    const price = props.price;
const columns = [
    {key: "name", name:"Назва послуги"},
    {key: "price", name:"Вартість"}
];
let rows = [];
price.map(p => {
    return rows.push(p.service)
} );
console.log("rows: " + rows.length);



    /*<li>Назва послуги</li>
    <li>Вартість</li>
    <li>Назва послуги</li>
    <li>Вартість</li>*/

    let res = price.map(function (p){
        return <ul key={p._id}>
            <li>{p.service}</li>
            <li>{p.price}</li>
            </ul>
        /*<tr key={p._id}>
            <td>{p.service}</td>
            <td>{p.price}</td>
        </tr*/
    });
return (
    /*<table >
       <thead>
       <tr>
           <td>Назва послуги</td>
           <td>Вартість</td>
       </tr>
       </thead>
        <tbody>
        {res}
        </tbody>
    </table>*/
   /* <ul className="gridServices">
        <li>Назва послуги</li>
        <li>Вартість</li>
        <li>Назва послуги</li>
        <li>Вартість</li>
        {res}
    </ul>*/

    <ReactDataGrid
        columns={columns}
        rowGetter={(i) => rows[i]}
        rowsCount={rows.length}
        />

)
}
