import React, {useEffect, useState} from "react";
import "./../../style/specialistsInfo.css";
import {InfoSpecialists} from "./infoSpecialists";


export function  OurSpecialistsPageSpecList ()  {
    const [specialists, setSpecialists] = useState([]);
    const [selectedEmp, setSelectedEmp] = useState(0);
    useEffect(() => {
        fetch("http://localhost:3002/api/specialists")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setSpecialists(res)
            })
            .catch(err =>
                console.log(err))
    }, [])

    return (
        <div className="container">
            <div className="row  ">
                <div className="col-xl-12 ">
                    <ul className="specialistsListPage">
                        {
                            specialists.map((s, index) => {
                                while (index < 6) {
                                    return(
                                        <li key={s.idEmployees} onClick={() => setSelectedEmp(s.idEmployees)}>
                                            <img src={"http://localhost:3002" + s.photo} alt="doctor"/>
                                            <p>Доктор {s.surname} {s.name}</p>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                    <InfoSpecialists specialist={specialists} selected={selectedEmp}/>
                </div>
            </div>
        </div>
    )

}
