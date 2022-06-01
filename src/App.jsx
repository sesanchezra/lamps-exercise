
import { useState } from 'react'
import './App.css'
import Lamp from './components/Lamp'
import LampGlobal from './components/LampGlobal'

function App() {

  const [isOnGlobal, setisOnGlobal] = useState('on')

  const switchLightGlobal = () => {
    if(isOnGlobal==='on'){
      setisOnGlobal('off')
    }
    else{
      setisOnGlobal('on')
    }
  }

  return (
    <div className="App">
        <div className='lamps'>
          <Lamp />
          <Lamp />
          <Lamp />
          <Lamp />
          <Lamp />
          <Lamp />
          <Lamp />
        </div>
        <div className='lamps-global'>
          <LampGlobal 
            isOnGlobal={isOnGlobal}
            switchLightGlobal={switchLightGlobal}
          />
          <LampGlobal 
            isOnGlobal={isOnGlobal}
            switchLightGlobal={switchLightGlobal}
          />
          <LampGlobal 
            isOnGlobal={isOnGlobal}
            switchLightGlobal={switchLightGlobal}
          />
          <LampGlobal 
            isOnGlobal={isOnGlobal}
            switchLightGlobal={switchLightGlobal}
          />
          <LampGlobal 
            isOnGlobal={isOnGlobal}
            switchLightGlobal={switchLightGlobal}
          />
        </div>
    </div>
  )
}

export default App
