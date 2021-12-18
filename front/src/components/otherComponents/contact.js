import React, {useEffect, useState} from "react";
import "./../../style/contact.css";


export function Contact () {
 /*   const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/api/contacts")
            .then(res =>res.json())
            .then(result => {
                //console.log(result);
                setContacts(result);
            },
                (err) => {
                    console.log(err)
                }
                )
            /!*.catch(err =>
                console.log(err))*!/
    }, [contacts])*/
    /*contacts.map(c => console.log("con" + c.info));*/
//console.log("cont" + contacts[0].heading);
    return (
    <div className="row ">
        <div className="col-xl-12 d-flex  contacts">
            {/*  <div className="address">
                <h3>{contacts[0].heading}</h3>
                <p>{contacts[0].info}</p>
            </div>
            <div className="phone">
                <h3>{contacts[1].heading}</h3>
                <p>{contacts[1].info}</p>
            </div>
            <div className="email">
                <h3>{contacts[2].heading}</h3>
                <p>{contacts[2].info}</p>
            </div>*/}
            <div className="address">
                <h3>Адреса компанії</h3>
                <p>Вул. Шевченка 240/1, м. Миколаїв, 54001, Україна</p>
            </div>
            <div className="phone">
                <h3>Номера телефонів</h3>
                <p>+38 093 032 12 19
                    +38 093 032 19 12</p>
            </div>
            <div className="email">
                <h3>Додаткові способи зв`язку</h3>
                <p>support@test.kz
                    support@test.kz</p>
            </div>
        </div>
    </div>
    )

}
export default Contact;