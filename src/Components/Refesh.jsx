import React from 'react'
import '../Styles/refresh.css'
import adven from '../assets/adven.png'

const Refesh = ({refresh}) => {
  return (
    <div>
        <div className='no-adventure'>
            <img src={adven} alt={'Refresh Image'} />
            <h2>No Adventures Left</h2>
            <p>Refresh Page to view different adventures from the long list of ideas 
                available</p>
            <button onClick={refresh} className='not-btn'>Refresh</button>
        </div>
    </div>
  )
}

export default Refesh