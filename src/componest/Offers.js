import React from "react";
import Offer from "./Offer";
import './Offers.css'
const Offers = ({ offers }) => {
    return (
        <div className="offerSection">
            
            {offers.map((item, index) => (
                <Offer key={item.image} index={index} link={item.url} src={item.image} />


            ))}
        </div>
    )
}

export default Offers;