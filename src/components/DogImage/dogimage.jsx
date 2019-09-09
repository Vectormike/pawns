import React from 'react'

import './dogimage.css'

function DogImage({url}) {
    return (
        <div >
            <img className="image" src={url} alt=""/>
        </div>
    )
}

export default DogImage;