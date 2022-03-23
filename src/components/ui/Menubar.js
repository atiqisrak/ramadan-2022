import React from 'react'
import './Menubar.css'

const Menubar = () => {
  return (
    <>
    <div className="menuholder">
        <div className="active">
        <i class="bi bi-calendar4"></i>
        </div>
        <div>
        <i class="bi bi-clipboard-check"></i>
        </div>
        <div className="newTask">
        <i class="bi bi-plus"></i>
        </div>
        <div>
        <i class="bi bi-clock-history"></i>
        </div>
        <div>
        <i class="bi bi-person-lines-fill"></i>
        </div>
    </div>
    </>
  )
}

export default Menubar