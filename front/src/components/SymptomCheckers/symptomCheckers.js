import React from "react";
import "../../style/symptomCheckers.css";


 function SymptomCheckers () {

    return (
        <div className="container">
        <div className="row ">
            <div className="col-xl-12 ">
                <iframe className="symptomChecker" src='https://dodxtx.shinyapps.io/EMSC/'>  </iframe>
            </div>
        </div>
        </div>
    )

}
export default SymptomCheckers;