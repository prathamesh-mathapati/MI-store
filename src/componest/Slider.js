import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = ({ Data }) => {
    return (
        <Carousel fade>
            {Data.map((item) => (
                <Carousel.Item >
                    <img
                        src={item}
                        className="d-block w-100"
                        alt="First slide">
                    </img>
                </Carousel.Item>

            ))

            }
        </Carousel>

    )
}

export default Slider