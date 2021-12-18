import React from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import '@inovua/reactdatagrid-community/index.css';

export function PriceListItem (props){
    const price = props.price;
const columns = [
    {name: "name", header:"Назва послуги", minWidth:50, defaultFlex: 2},
    {name: "price", header:"Вартість", maxWidth: 1000, defaultFlex: 1}
];
/*let rows = [];
const map1 = price.map(function(p) {
    return rows.push(p.title);
    }
 );*/
    let mass = [];
    price.map(serv => {

        mass.push({id:serv.idIntermediateDepSer, name: serv.service, price: serv.price});
    })
    let title = mass.slice(0,4);
console.log("mass: " + mass.length + " " + mass);
    console.log("title: " + title.length);

const gridStyle = {minHeight: 550}

    /*<li>Назва послуги</li>
    <li>Вартість</li>
    <li>Назва послуги</li>
    <li>Вартість</li>*/

  /*  let res = price.map(function (p){
        return <ul key={p._id}>
            <li>{p.service}</li>
            <li>{p.price}</li>
            </ul>
        /!*<tr key={p._id}>
            <td>{p.service}</td>
            <td>{p.price}</td>
        </tr*!/
    });*/
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
<div>
   <ReactDataGrid
       idProperty="id"
        columns={columns}
        dataSource={mass}
       style={gridStyle}
        />
<div>Hello</div>
</div>
)
}
