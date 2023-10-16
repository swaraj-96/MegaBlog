import React from 'react';
import viteLogo from '/vite.svg'


function Logo ({width = '100px'}) {
  return (
    <div>
      <img src={viteLogo} alt="Vite logo" />
    </div>
  )
}

export default Logo