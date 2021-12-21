import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import  {ServiceItem} from "./serviceItem";
import insta from "./../../img/insta.png";
import write from "./../../img/write.png";
import whatsApp from "./../../img/whatsapp.png";
import more from "./../../img/more.png"
import TelegramBot from "../TelegramBot/TelegramBot";

export function IndexHeader (props){
const logo = props.logo;
    const [services, setServices] = useState([]);
   const [click, setClick] = useState(false);
    useEffect(() => {
        fetch("http://localhost:3002/api/services")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setServices(res)
            })
            .catch(err =>
                console.log(err))
    }, [])

    return (
        <header className="container-fluid p-0 index_fluid">
            <div className="container">
                <div className="row  ">
                    <div className="col-xl-3  logo">
                        <Link to="/"><img src={logo}/></Link>
                    </div>
                    <div className="col-xl-6 offset-3">
                        <ul className="menu">
                            <li><Link to="/">Головна</Link></li>
                            <li><Link to="/services">Послуги</Link></li>
                            <li><Link to="/ourSpecialists">Спеціалісти</Link></li>
                            <li><Link to="/contact">Ми</Link></li>
                            <li><Link to="/news">Новини</Link></li>
                            <li>УКР</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-6 cardioCentre">
                    <h6>Кардіо-реабілітаційний центр</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the</p>


                    <ServiceItem services={services}  department="Кардіо-реабілітаційний центр"/>
                    <button onClick={(e) => window.location.assign('http://localhost:3000/cardioCenter') }>Всі послуги</button>
                </div>
                <div className="col-xl-6 traumaCentre">
                    <h6>Травма-реабілітаційний центр</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                    <ServiceItem services={services}   department="Травма-реабілітаційний центр"/>
                    <button onClick={(e) => window.location.assign('http://localhost:3000/traumaCenter') }>Всі послуги</button>
                    <button onClick={() => click ? setClick(false) : setClick(true)} className="feedback">Зателефонувати мені</button>
                    <ul className="social">
                        <li><a href="https://www.instagram.com/onclinic.ua/"><img src={insta} alt="inst"/></a></li>
                        <li><a href="#"><img src={write} alt="write"/></a></li>
                        <li><a href="#"><img src={whatsApp} alt="whatsApp"/></a></li>
                        <li><a href="#"><img src={more} alt="more"/></a></li>
                    </ul>

                    <div>
                    {
                       click ?  <TelegramBot /> : ""
                    }
                    </div>
                </div>
            </div>
        </header>)


}