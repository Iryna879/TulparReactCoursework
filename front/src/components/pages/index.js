import React, {useEffect, useState} from "react";
import "../../style/indexPage.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {IndexHeader} from "./../otherComponents/indexHeader";
import {OurServicesRow} from "../otherComponents/ourServicesRow";
import {Footer} from "../otherComponents/footer";
import Recommend from "../otherComponents/recommend";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";
import {PriceList} from "../otherComponents/priceList";
import {SpecialistsIndex} from "../otherComponents/specialistsIndex";

export function Index (){
    const [name, setName] = useState("index");

    return (
        <div>
        <IndexHeader logo={logo}></IndexHeader>
            <main>
        <OurServicesRow name={name}></OurServicesRow>
                <div className="container">
                    <SpecialistsIndex></SpecialistsIndex>
                    <PriceList></PriceList>
                    <Recommend></Recommend>
                    <Map></Map>
                    <Contact></Contact>
                </div>
            </main>
        <Footer></Footer>
        </div>
    )

}