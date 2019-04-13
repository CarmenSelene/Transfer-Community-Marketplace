import React from "react";
import Mybuys from "../../components/Mybuys/Mybuys";
import Myposts from "../../components/Myposts/Myposts";

export const Landingdata = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Myposts {...props} />
                </div>
                <div className="col-sm">
                    <Mybuys {...props} />
                </div>
            </div>
        </div>)
}
