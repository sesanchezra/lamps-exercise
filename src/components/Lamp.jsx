import React, { useState } from 'react'

const Lamp = () => {

    const [isOn, setIsOn] = useState('on')

    const switchLight = () => {
        if(isOn==='off'){
            setIsOn('on')
        }
        else{
            setIsOn('off')
        }

    }
    return (
        <div className='lamp-container'>
            <div className={`lamp ${isOn}`}></div>
            <div className="button-lamp">
                <button onClick={switchLight}>{isOn}</button>
            </div>
        </div>
    )
}

export default Lamp
