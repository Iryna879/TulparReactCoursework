import React, {useEffect, useState} from "react";


export function ServiceItem (props){
  const services = props.services;
  const department = props.department;

  let mass = [];
    services.map(serv => {if(serv.title == department){
        mass.push(serv.service);
    }})
    let title = mass.slice(0,4);


    return (
        <ul className="services">
                        {
                            title.map(t => {
                                return (
                                    <li key={t.id}>{t}</li>
                                )
                            })
                        }
                    </ul>
                   )
}