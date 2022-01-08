import React from 'react'
import Bgadd from './Bgadd';
import Featured from './Featured';
import "./home.css";
import NewItem from './NewItem';
import Slider from './Slider'

function Homebody() {
    return (
        <div>
            <div className='container'>
            <Slider />
            <Featured />
            <NewItem />
            <Bgadd />
        </div>
        </div>
    )
}

export default Homebody
