import React from 'react'

const LampGlobal = ({isOnGlobal,switchLightGlobal}) => {
    return (
        <div className='lamp-container'>
            <div className={`lamp ${isOnGlobal}`}></div>
            <div className="button-lamp">
                <button onClick={switchLightGlobal}>{isOnGlobal}</button>
            </div>
        </div>
    )
}

export default LampGlobal
