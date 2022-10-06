import React from "react";
import './Starproduct.css'
const Starproduct=({starproduct})=>{
    return (
        <div className="staproduct">
            <div><a href={`${starproduct[0].url}`}/> <img src={starproduct[0].image}/></div>

            <div><a href={`${starproduct[1].url}`}/> <img src={starproduct[1].image}/>
            <a href={`${starproduct[2].url}`}/> <img src={starproduct[2].image}/>
            <a href={`${starproduct[3].url}`}/> <img src={starproduct[3].image}/>
            </div>

        </div>
    )
}

export default Starproduct;