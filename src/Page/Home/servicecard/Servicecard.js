import React from 'react'
import './css.css'
function Servicecard({ iconClass, title, description}) {
  return (
    <div className="card">
      <div className="icon">
        <i className={iconClass}></i>
      </div>
      <div className="content">
        <h2 className="title">{title}</h2>
        <div className="description"><p>{description}</p></div>
      </div>
    </div>
  )
}

export default Servicecard